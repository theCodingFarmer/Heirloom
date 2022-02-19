import React, {useState} from 'react';
import styled from '@emotion/styled';
import getStripe from '../../../stripe/getStripe';
import {HeirloomIcon} from '../icon';

const iconSize = {
    small: 46,
    medium: 60,
    large: 70
};

const StyledBasketIconAndTextContainer = styled.div`
    position: relative;
    margin: 0 0.5rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: ${(props) => props.isSelected ? '0' : '100%'};
        bottom: 0;
        background: var(--primary-color);
        height: 4px;
        transition: right var(--transition-fast) ease-out;
    }
    
    > svg {
        fill: var(${(props) => props.isSelected ? '--primary-color' : '--secondary-color'});
    }
    
    > p {
        color: var(${(props) => props.isSelected ? '--primary-color' : '--secondary-color'});
    }

    &:hover:before {
        right: 0;
    }
    
    &:hover > p {
        color: var(--primary-color);
    }
    
    &:hover > svg {
        fill: var(--primary-color);
    }
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
                <button onClick={() => handleSubmit()}>
                    Add to Cart
                </button>
            </div>
            {seasonsProducts.map((seasonProducts) =>
                <div key={seasonProducts.shareSeasonTitle}>
                    <div>
                        <h3>{seasonProducts.shareSeasonTitle}</h3>
                        <p>5 Weeks Long from May 10th to July 24th</p>
                        <p>Produce in Season: </p>
                    </div>
                    <div>
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default CsaMembershipSelection;
