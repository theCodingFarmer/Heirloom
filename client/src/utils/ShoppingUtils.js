export const formatStringPrice = (price) => `$${price.slice(-price.length - 2, -2)}.${price.slice(-2)}`;

export const shopPricedMembershipAndProductsData = (productsArray, membershipObject, stripePricesData) => {
    const seasons = ['Spring', 'Summer', 'Fall'];
    const sizes = ['Large', 'Medium', 'Small'];

    const formattedStripePriceData = stripePricesData.nodes.map((price) => ({
        isActive: price.active,
        name: price.product.name,
        stripe_id: price.id,
        unit_amount: price.unit_amount,
        unit_amount_formatted: formatStringPrice(price.unit_amount_decimal)
    }));

    const shopPricedProducts = productsArray?.nodes?.map((product) => ({
        ...product,
        shopProductsOptions: product.shopProductsOptions.map((productOption) => {
            const stripeDataForProduct = formattedStripePriceData.find((stripePriceItem) => stripePriceItem.stripe_id === productOption.shopProductSelectableOptionStripeId);
            return ({
                ...productOption,
                unit_amount: stripeDataForProduct ? stripeDataForProduct.unit_amount : undefined,
                unit_amount_decimal: stripeDataForProduct ? stripeDataForProduct.unit_amount_decimal : undefined,
                isActiveWithStripe: stripeDataForProduct ? stripeDataForProduct.isActive : undefined
            })
        })
    }));

    const shapeAndPriceMembershipData = (seasons, sizes, membershipObjData) => seasons.map((season) => {
        if (membershipObjData) {
            const seasonObject = membershipObjData.[`seasonDetails${season}`];
            return ({
                season,
                seasonPeriod: {
                    start: seasonObject.seasonStart,
                    end: seasonObject.seasonEnd
                },
                totalWeeks: seasonObject.totalWeeks,
                status: seasonObject.totalWeeks,
                availableProduce: seasonObject.availableProduce || undefined,
                basketSizes: sizes.map((size) => {
                    const basketSize = `csaBasketSizePricing${size}`
                    return ({
                        basketSize: size,
                        ...seasonObject.[basketSize],
                        ...formattedStripePriceData.find((stripePriceItem) => stripePriceItem.stripe_id === seasonObject.[basketSize].csaBasketSizePricingStripeId)
                    })
                })
            })
        }

        return undefined;

    });

    return ({
        memberships: shapeAndPriceMembershipData(seasons, sizes, membershipObject) || undefined,
        products: shopPricedProducts || undefined,
        priceFromId: (stripeId) => formattedStripePriceData.find((stripePriceItem) => stripePriceItem.stripe_id === stripeId)?.unit_amount_formatted
    })
};
