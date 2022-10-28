import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import StarRating from './StarRating';

const RatingModal = ({ setReviews }) => {
  const [reviewData, setReviewData] = useState({ watchStatus: '', opinion: '', storyStars: 0, charactersStars: 0, animationStars: 0, soundStars: 0, vibeStars: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add Review</button>
      <Modal 
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-pink-300 overflow-auto p-10 outline-none w-1/3 h-5/6"
      >
        <button onClick={closeModal} className="absolute right-0 top-0 p-4 text-xl"><AiOutlineClose /></button>
        <div className="flex flex-col text-center mt-5">
          <h1 className="text-3xl">Write a Review</h1>
          <form onSubmit={handleSubmit}>
            <p>Watch Status</p>
            <input type="radio" id="completed" name="watch_status" value="Completed" />
            <label for="completed">Completed</label>
            <input type="radio" id="watching" name="watch_status" value="Watching" />
            <label for="watching">Watching</label>
            <input type="radio" id="on-hold" name="watch_status" value="On-Hold" />
            <label for="on-hold">On-Hold</label>
            <input type="radio" id="dropped" name="watch_status" value="Dropped" />
            <label for="dropped">Dropped</label>
            
            <p>Opinion</p>
            <input type="radio" id="would-recommend" name="opinion" value="Would Recommend" />
            <label for="would-recommend">Would Recommend</label>
            <input type="radio" id="mixed-opinion" name="opinion" value="Mixed Opinion" />
            <label for="mixed-opinion">Mixed Opinion</label>
            <input type="radio" id="would-not-recommend" name="opinion" value="Would Not Recommend" />
            <label for="would-not-recommend">Would Not Recommend</label>
            <div>
              <StarRating name="Story" />
              <StarRating name="Characters" />
              <StarRating name="Animation" />
              <StarRating name="Sound" />
              <StarRating name="Vibe" />
            </div>
            <input type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default RatingModal