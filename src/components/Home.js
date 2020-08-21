import React from 'react';
import ProductsList from './ProductsList';

const Home = (props) => {
    return(
        <div>
            <ProductsList data={props.data} />
        </div>
    )
}

export default Home;