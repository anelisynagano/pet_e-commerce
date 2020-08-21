import React from 'react';
import Product from './ProductCard';
import { Link } from 'react-router-dom';

const ProductsList = (props) => {
    return (
        <div className='cardsContainer'>
            <div className='productsTitle'>The most unique products for your pets, don't miss out!</div>
            <div className='productsList'>
                {
                    props.data.map(product => (
                        <Link to={`/product/${product.id}`}>
                            <Product key={product.id} data={product} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList;