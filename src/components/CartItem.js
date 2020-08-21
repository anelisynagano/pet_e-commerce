import React from 'react';

const CartItem = (props) => {
    console.log(props);
    return (
        <div className="row">
            <div className='col'>{props.cartItem.product_title}</div>
            <div className='col'>{props.cartItem.product_price}</div>
            <div className='col'>{props.cartItem.quantity}</div>

        </div>
    )
}

export default CartItem;