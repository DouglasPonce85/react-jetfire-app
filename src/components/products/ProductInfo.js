/* eslint react/prop-types: 0 */

import React from "react";
import styled from 'styled-components';

const ProductInfo = (props) => {
    return (
        <ProductInfoWrapper>
            <img src={props.imgUrl} alt={props.name} />
            <ProductInfoDetails>
                <span>{props.name}</span>
                <span>{props.price}</span>
                <span>{props.soldBy}</span>
            </ProductInfoDetails>
        </ProductInfoWrapper>
    )
}

const ProductInfoWrapper = styled.div`
    position: relative;
    padding-top: 100%;
    border: 1px solid #dfdddd;
    overflow: hidden;

    img {
        transition: box-shadow .3s;
        position: absolute;
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 10px;
        transition: all 0.3s;
        transform: scale(1);
    }

    img:hover {
         box-shadow: 0 0 11px rgba(33,33,33,.2);
         transform: scale(1.1);
    }
`;

const ProductInfoDetails = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #f2f3f4;
    padding: 5px;
    font-size: 13px;
    font-weight: 400;
    justify-content: space-around;
    text-align: center;
`;

export default ProductInfo;