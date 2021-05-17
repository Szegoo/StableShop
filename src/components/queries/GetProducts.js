import React, { PureComponent } from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
query {
  getProducts {	
    id
    productName
    price
    productDescription
  }
}
`;

export default class GetProductsQuery extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <Query query={GET_PRODUCTS}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading..</p>
                    if (error) return <p>error!</p>
                    console.log(data);
                    const { getProducts } = data;
                    const products = getProducts;

                    return React.Children.map(children, function (child) {
                        return React.cloneElement(child, { products });
                    })
                }}
            </Query>
        )
    }
}