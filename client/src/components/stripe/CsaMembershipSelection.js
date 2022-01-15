import React, {useState} from 'react';
import getStripe from '../../../stripe/getStripe';

const priceFormatter = (unformattedPrice) =>  Math.round(unformattedPrice / 100).toFixed(2).toString();

const CsaMembershipSelection = ({seasonSizeSelections}) => {
    console.log('seasonSizeSelections', seasonSizeSelections);
    const [loading, setLoading] = useState(false)

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
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <p>{'Spring CSA Share'}</p>
                    </legend>

                    <label>
                        {'small'}
                        <input
                            name={'spring'}
                            type="radio"
                            value={'price_1JxwBHIyY3l4fjpK0HTkoepf'}
                        />
                    </label>
                    <label>
                        {'medium'}
                        <input
                            name={'spring'}
                            type="radio"
                            value={'price_1JxwBrIyY3l4fjpKmLNhawri'}

                        />
                    </label>
                    <label>
                        {'large'}
                        <input
                            name={'spring'}
                            type="radio"
                            value={'large price.id'}
                        />
                    </label>
                    <label>
                        {'none'}
                        <input
                            name={'spring'}
                            type="radio"
                            value={null}
                        />
                    </label>

                    <legend>
                        <p>{'Summer CSA Share'}</p>
                    </legend>

                    <label>
                        {'small'}
                        <input
                            name={'summer'}
                            type="radio"
                            value={'price_1JxwDoIyY3l4fjpK5BkFh1cS'}
                        />
                    </label>
                    <label>
                        {'medium'}
                        <input
                            name={'summer'}
                            type="radio"
                            value={'price_1JxwENIyY3l4fjpK6VlTlawc'}

                        />
                    </label>
                    <label>
                        {'large'}
                        <input
                            name={'summer'}
                            type="radio"
                            value={'large price.id'}
                        />
                    </label>
                    <label>
                        {'none'}
                        <input
                            name={'summer'}
                            type="radio"
                            value={null}
                        />
                    </label>
                </fieldset>
                <button> Order CSA Selection </button>
            </form>
            {/*{seasonSizeSelections.map((season) =>*/}
            {/*    <div key={season.product.id}>*/}
            {/*        <p>{season.product.name}</p>*/}
            {/*        <button>{`$${priceFormatter(season.unit_amount)}`}</button>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )

};

export default CsaMembershipSelection;
