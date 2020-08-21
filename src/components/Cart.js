import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartArray, price, clearItems }) => {
    return (
        <div>
            <div>
                {cartArray.length > 0 && <button onClick={clearItems}>Clear Cart</button>}
            </div>
            {cartArray.length === 0
                ?
                <div>Shopping Cart Empty :(</div>
                :
                <header>
                    <div className='col'>Product</div>
                    <div className='col'>Unit Price</div>
                    <div className='col'>Quantity</div>
                </header>
            }
            {cartArray.map(cartItem => <CartItem cartItem={cartItem} />)}
            <p>Total: {price} EUR</p>
        </div>
    )
}

export default Cart;