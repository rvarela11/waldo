// @vendors
import React from 'react';
import { Query } from 'react-apollo';

// @queries
import { getPizzaSizeByNameFromState, getPizzaSizeByName } from './queries';

// @components
import OrderCard from '../OrderCard/OrderCard';

const Order = () => (
    <Query query={getPizzaSizeByNameFromState}>
        {({ data: { selectedPizzaSizeFromMenu }, loading }) => {
            if (loading) return null;
            return (
                <Query query={getPizzaSizeByName} variables={{ selectedPizzaSizeFromMenu }} skip={!selectedPizzaSizeFromMenu}>
                    {({ data: { pizzaSizeByName }, loading }) => {
                        if (loading) return null;
                        return (
                            <OrderCard data={pizzaSizeByName} />
                        );
                    }}
                </Query>
            );
        }}
    </Query>
);

export default Order;