import React, {useState} from 'react';
import styled from '@emotion/styled';
import getStripe from '../../../stripe/getStripe';
import {HeirloomIcon} from '../icon';

const iconSize = {
    small: 46,
    medium: 60,
    large: 70
};

const StyledSeasonSizeRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledSeasonHeaderContainer = styled.div`
    margin-bottom: 12px;

    > h3 {
        margin-bottom: 4px;
        border-bottom: 2px solid var(--primary-color);
    }
    
    > p {
        color: var(--paragraph-text-dark);
        margin-bottom: 2px;
    }
`;

const StyledBasketIconAndTextContainer = styled.div`
    position: relative;
    text-decoration: none;
    display: flex;
    margin: 6px;
    padding: 10px 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 11rem;
    box-sizing: content-box;
    outline: ${(props) => props.isSelected ? '4px solid var(--primary-color)' : '1px solid var(--secondary-color)'};
    border-radius: var(--radius);
    
    &:hover {
        cursor: pointer;
    }
    
    > svg {
        fill: var(--secondary-color);
    }
    
    > p {
        color: var(--secondary-color);
        margin-bottom: 0;
    }
    
    &:hover > p {
        color: var(--primary-color);
    }
    
    &:hover > svg {
        fill: var(--primary-color);
    }
`;

const StyledOrderButton = styled.button`
    background-color: ${(props) => props.disabled ? 'var(--disabled-color)' : 'var(--primary-color)'};
    padding: 18px;
    font-size: 16px;
    font-weight: bold;
    color: var(--title-color-light);
    border: none;
    outline: ${(props) => props.disabled ? 'none' : '4px solid var(--primary-color)'};
    
    &:hover {
        color: var(--title-color-light);
        background-color: ${(props) => props.disabled ? 'var(--disabled-color)' : 'var(--secondary-color)'} ;
        cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 26px 0;
`;

const priceFormatter = (unformattedPrice) =>  Math.round(unformattedPrice / 100).toFixed(2).toString();

const formatSeasonOrder = (rawSeasonData) => {
    const seasonOrder = ['Spring', 'Summer', 'Fall'];

    return seasonOrder.map((season) => ({
        shareSeasonTitle: `${season} CSA Share`,
        shareSeasonSizes: [...rawSeasonData.filter((filteredSeason) => filteredSeason.product.metadata.season === (season).toLowerCase())]
    }))
};

const addIsSelectedToData = (allSeasonData) => allSeasonData.map((season) => ({
    ...season,
    isSelected: false
}));

const CsaMembershipSelection = ({seasonSizeSelections}) => {
    console.log('data into component (seasonSizeSelections)', seasonSizeSelections);
    const [loading, setLoading] = useState(false)
    const [selectedCsaOptions, setSelectedCsaOptions] = useState(addIsSelectedToData(seasonSizeSelections));
    const seasonsProducts = formatSeasonOrder(seasonSizeSelections);


    console.log('selectedCsaOptions', selectedCsaOptions);

    const isSelected = (id) => {
        const selection = selectedCsaOptions.find((selection) => selection.id === id);
        return selection.isSelected;
    };

    const updateCsaSelection = (seasonSizeId) => {
        const selectedCsaSeasonAndSize = selectedCsaOptions.find((selection) => selection.id === seasonSizeId);
        const remainingUnselectedSeasonSizes = selectedCsaOptions.filter((selection) => selection.product.metadata.season === selectedCsaSeasonAndSize.product.metadata.season && selection.id !== seasonSizeId);
        const remainingCsaSeasonsAndSizes = selectedCsaOptions.filter((selection) => selection.product.metadata.season !== selectedCsaSeasonAndSize.product.metadata.season && selection.id !== seasonSizeId);

        const unselectedOtherSizes = remainingUnselectedSeasonSizes.map((seasonSize) => ({
            ...seasonSize,
            isSelected: false
        }));

        setSelectedCsaOptions([
            ...remainingCsaSeasonsAndSizes,
            ...unselectedOtherSizes,
            {
                ...selectedCsaSeasonAndSize,
                isSelected: !selectedCsaSeasonAndSize.isSelected
            }
        ]);
    };

    const disableCheckoutButton = !selectedCsaOptions.some((selection) => selection.isSelected);

    console.log('disableCheckoutButton', disableCheckoutButton);

    const createStripeLineItems = () => selectedCsaOptions.filter((selection) => selection.isSelected).map((seasonSize) => ({
            price: seasonSize.id,
            quantity: 1
        }));

    const handleSubmit = async event => {
        setLoading(true);
        const lineItems = createStripeLineItems();
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            mode: 'payment',
            lineItems,
            successUrl: `${window.location.origin}/shop/thankyou`,
            cancelUrl: `${window.location.origin}/shop`,
        })

        if (error) {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                {seasonsProducts.map((seasonProducts) =>
                    <div key={seasonProducts.shareSeasonTitle}>
                        <StyledSeasonHeaderContainer>
                            <h3>{seasonProducts.shareSeasonTitle}</h3>
                            <p>5 Weeks Long from May 10th to July 24th</p>
                            <p>Produce in Season: </p>
                        </StyledSeasonHeaderContainer>
                        <StyledSeasonSizeRow>
                            {seasonProducts.shareSeasonSizes.map((shareSize) => {
                                return (
                                    shareSize.active &&
                                    <StyledBasketIconAndTextContainer
                                        key={shareSize.product.name}
                                        isSelected={isSelected(shareSize.id)}
                                        onClick={() => updateCsaSelection(shareSize.id)}
                                    >
                                        <HeirloomIcon
                                            icon={'vegBasket'}
                                            size={iconSize[shareSize.product.metadata.size]}
                                        />
                                        <p>{shareSize.product.name}</p>
                                        <p>{`$${priceFormatter(shareSize.unit_amount)}`}</p>
                                    </StyledBasketIconAndTextContainer>
                                )
                            })}
                        </StyledSeasonSizeRow>
                    </div>
                )}
            </div>
            <StyledButtonContainer>
                <StyledOrderButton
                    disabled={disableCheckoutButton}
                    onClick={() => handleSubmit()}
                >
                    Complete CSA Membership & Checkout
                </StyledOrderButton>
            </StyledButtonContainer>
        </div>
    );
};

export default CsaMembershipSelection;
