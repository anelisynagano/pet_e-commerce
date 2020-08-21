import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = (props) => {
    return ( 
        <div>
         <StarRatings
          rating={props.rate}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension='20px'
        />
        </div>
    )
}

export default StarRating;