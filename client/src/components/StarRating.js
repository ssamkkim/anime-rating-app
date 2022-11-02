import React from 'react';
import { Rating } from 'react-simple-star-rating';

const StarRating = ({ name, reviewData, setReviewData }) => {
  const handleRating = (rate) => {
    setReviewData({ ...reviewData, [`${name.toLowerCase()}Stars`]: rate });
  };

  return (
    <div className="flex justify-between">
      <p>{name}</p>
      <Rating
        onClick={handleRating}
        iconsCount={10}
        allowFraction={true}
        transition={true}
      />
    </div>
  );
};

export default StarRating;
