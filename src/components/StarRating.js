import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
// import Rating from '@mui/material/Rating';

const StarRating = ({ name }) => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  }

  return (
    <div className="flex justify-between">
      <p>{name}</p>
      <Rating 
        onClick={handleRating}
        iconsCount={10}
        allowFraction={true}
        transition={true}
      />
      {/* <Rating 
        name={`${name}-rating`}
        value={ratingValue}
        onChange={(event, newValue) => {setRatingValue(newValue)}}
      /> */}
    </div>
  )
}

export default StarRating