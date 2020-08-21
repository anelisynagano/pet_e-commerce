import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRating from './StarRating';

const ProductDescription = ({ routerProps, data, updatePrice }) => {
    const product = data.find(element => (
        element.id === +routerProps.match.params.id
    ))

    const notify = () => toast("Item added to cart :)");

    const handleClick = () => {
        updatePrice(product.product_price, product)
        notify()
    }
    return (
        !product
            ?
            <p>loading...</p>
            :
            <div className='descriptionContainer'>
                <div className='descriptionImage'>
                    <img src={product.product_image} alt="" />
                    <StarRating rate={product.product_rating} />
                </div>
                <div className='description'>
                    <h1>{product.product_title}</h1>
                    <p>{product.product_description}</p>
                    <p>{product.product_price}</p>
                    <button onClick={handleClick}>add to cart</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={1500}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
    )

}

export default ProductDescription;