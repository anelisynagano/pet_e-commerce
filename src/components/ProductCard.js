import React from 'react';
import StarRating from './StarRating';

const ProductCard = (props) => {
    return (
        <div className='productCard'>
            <div className='imgDiv'>
                <img src={props.data.product_image} alt="" />
            </div>
            <h4>{props.data.product_title}</h4>
            <p>{props.data.product_price} EUR</p>
            <StarRating rate={props.data.product_rating} />
        </div>
    )
}

export default ProductCard;