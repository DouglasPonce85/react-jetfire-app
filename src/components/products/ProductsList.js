/* eslint react/prop-types: 0 */

import React from "react";
import styled from 'styled-components';

import ProductInfo from './ProductInfo';

const ProductsList = (props) => {
    return (
        <ProductsListContainer>
            {
                props.data.map(product =>
                    <ProductInfo key={product.id} {...product} />)
            }
        </ProductsListContainer>
    )
}

const ProductsListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 25px;
`;

export default ProductsList;