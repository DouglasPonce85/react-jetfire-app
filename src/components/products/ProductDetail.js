/* eslint react/prop-types: 0 */

import React from "react";
import styled from 'styled-components';

const ProductDetail = (props) => {
    return (
        <ProductDetailContainer>
            <img src={props.imgUrl} alt={props.name} />
            <span>{props.name}</span>
            <span>{props.price}</span>
            <span>{props.soldBy}</span>
        </ProductDetailContainer>
    )
}

const ProductDetailContainer = styled.div`
    position: relative;
    padding-top: 100%; /* added */
    border: 1px solid;
    background: cadetblue;

    img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%; /* image fills the grid item */
        position: absolute; /* position absolutely */
        top: 0;
        left: 0;
    }
`;

export default ProductDetail;