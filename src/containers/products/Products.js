import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import * as productsActions from '../../actions/productsActions';

class Products extends Component {
    componentDidMount() {
        console.log('Entered Products [1]...', this.props);
        // this.props.actions.requestNews();
    }

    loadNewOfDay = () => {
        console.log('Im Clicked... ');
        this.props.actions.requestNews();
    }

    render() {
        return (
            <ProductsStyle>
                <h1>{this.props.newOfDay}</h1>
                <p>Build macros cannot be invoked from a macro context. This means it is impossible
                    to use a macro to create a class which will provide build macros for other classes.
                </p>
                <button onClick={this.loadNewOfDay}>Update Title</button>
            </ProductsStyle>
        )
    }
}

const ProductsStyle = styled.div`
    margin: 65px auto;
`;

export const mapStateToProps = ({ products }) => ({
    newOfDay: products.newOfDay,
    message: products.message
});

export function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ ...productsActions }, dispatch);
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
