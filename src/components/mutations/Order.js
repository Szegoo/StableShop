import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_ORDER = gql`
mutation addOrder($order: Order!) {
    addOrder(order: $order) {
        success
    }
}
`;

export default class AddOrderMutation extends Component {
    render() {
        const { children } = this.props;
        return (
            <Mutation mutation={ADD_ORDER}>
                {addOrder =>
                    React.Children.map(children, function (child) {
                        return React.cloneElement(child, { addOrder });
                    })
                }
            </Mutation>
        )
    }
}