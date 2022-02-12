import React, {useState} from 'react';
import getStripe from '../../../stripe/getStripe';
import {HeirloomIcon} from '../icon';

const iconSize = {
    small: 46,
    medium: 60,
    large: 70
};

const priceFormatter = (unformattedPrice) =>  Math.round(unformattedPrice / 100).toFixed(2).toString();

const formatSeasonOrder = (rawSeasonData) => {
    const seasonOrder = ['Spring', 'Summer', 'Fall'];

    return seasonOrder.map((season) => ({
        shareSeasonTitle: `${season} CSA Share`,
        shareSeasonSizes: [...rawSeasonData.filter((filteredSeason) => filteredSeason.product.metadata.season === (season).toLowerCase())]
    }))
}

const formatSeasonSizeToObject = (allSeasonData) => {
    let newStateObject = {};

    allSeasonData.forEach((season) => newStateObject[`${season.product.metadata.season}-${season.product.metadata.size}`] = false)

    return newStateObject;
};


const CsaMembershipSelection = ({seasonSizeSelections}) => {
    console.log('seasonSizeSelections', seasonSizeSelections);
    const [loading, setLoading] = useState(false)
    const [selectedCsaOptions, setSelectedCsaOptions] = useState(formatSeasonSizeToObject(seasonSizeSelections))
    const [stripeLineItems, setStripeLineItems] = useState([]);

    const completeMembershipToStripeCheckout = () => {

    };

    console.log('selectedCsaOptions state: ', selectedCsaOptions);
    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);

        const springSelection = new FormData(event.target).get('spring');
        const summerSelection = new FormData(event.target).get('summer');

        console.log('springSelection', springSelection);
        console.log('summerSelection', summerSelection);

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            mode: 'payment',
            lineItems: [
                { price: springSelection, quantity: 1 },
                { price: summerSelection, quantity: 1 }
            ],
            successUrl: `${window.location.origin}/shop/thankyou`,
            cancelUrl: `${window.location.origin}/shop`,
        })

        if (error) {
            setLoading(false);
        }
    }

    const seasonsProducts = formatSeasonOrder(seasonSizeSelections);
    console.log('seasonsProducts', seasonsProducts);

    return (
        <div>
            {seasonsProducts.map((seasonProducts) =>
                <div>
                    <div>
                        <h3>{seasonProducts.shareSeasonTitle}</h3>
                        <p>5 Weeks Long from May 10th to July 24th</p>
                        <p>Produce in Season: </p>
                    </div>
                    <div>
                        {seasonProducts.shareSeasonSizes.map((shareSize) =>
                            shareSize.active &&
                            <div>
                                <HeirloomIcon
                                    icon={'vegBasket'}
                                    size={iconSize[shareSize.product.metadata.size]}
                                />
                                <p>{shareSize.product.name}</p>
                                <p>{`$${priceFormatter(shareSize.unit_amount)}`}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>

    );

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <fieldset>
    //                 <legend>
    //                     <p>{'Spring CSA Share'}</p>
    //                 </legend>
    //
    //                 <label>
    //                     {'small'}
    //                     <input
    //                         name={'spring'}
    //                         type="radio"
    //                         value={'price_1JxwBHIyY3l4fjpK0HTkoepf'}
    //                     />
    //                 </label>
    //                 <label>
    //                     {'medium'}
    //                     <input
    //                         name={'spring'}
    //                         type="radio"
    //                         value={'price_1JxwBrIyY3l4fjpKmLNhawri'}
    //
    //                     />
    //                 </label>
    //                 <label>
    //                     {'large'}
    //                     <input
    //                         name={'spring'}
    //                         type="radio"
    //                         value={'large price.id'}
    //                     />
    //                 </label>
    //                 <label>
    //                     {'none'}
    //                     <input
    //                         name={'spring'}
    //                         type="radio"
    //                         value={null}
    //                         defaultChecked={true}
    //                     />
    //                 </label>
    //
    //                 <legend>
    //                     <p>{'Summer CSA Share'}</p>
    //                 </legend>
    //
    //                 <label>
    //                     {'small'}
    //                     <input
    //                         name={'summer'}
    //                         type="radio"
    //                         value={'price_1JxwDoIyY3l4fjpK5BkFh1cS'}
    //                     />
    //                 </label>
    //                 <label>
    //                     {'medium'}
    //                     <input
    //                         name={'summer'}
    //                         type="radio"
    //                         value={'price_1JxwENIyY3l4fjpK6VlTlawc'}
    //
    //                     />
    //                 </label>
    //                 <label>
    //                     {'large'}
    //                     <input
    //                         name={'summer'}
    //                         type="radio"
    //                         value={'large price.id'}
    //                     />
    //                 </label>
    //                 <label>
    //                     {'none'}
    //                     <input
    //                         name={'summer'}
    //                         type="radio"
    //                         value={null}
    //                         defaultChecked={true}
    //                     />
    //                 </label>
    //             </fieldset>
    //             <button> Order CSA Selection </button>
    //         </form>
    //     </div>
    // )

};

export default CsaMembershipSelection;
