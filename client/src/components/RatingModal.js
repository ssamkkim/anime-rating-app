import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import StarRating from './StarRating';

const RatingModal = ({ setReviews }) => {
  const [reviewData, setReviewData] = useState({ watchStatus: '', opinion: '', storyStars: '', charactersStars: '', animationStars: '', soundStars: '', vibeStars: '' });
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reviewData);
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add Review</button>
      <Modal 
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-[#e77d11] overflow-auto p-10 outline-none w-1/3 h-5/6"
      >
        <button onClick={closeModal} className="absolute right-0 top-0 p-4 text-xl"><AiOutlineClose /></button>
        <div className="flex flex-col text-center mt-5">
          <h1 className="text-3xl text-[#f0e7e7]">Write a Review</h1>
          <form onSubmit={handleSubmit}>
            <p>Watch Status</p>
            <input type="radio" id="completed" name="watch_status" value="Completed" onChange={(e) => setReviewData({ ...reviewData, watchStatus: e.target.value })}/>
            <label for="completed">Completed</label>
            <input type="radio" id="watching" name="watch_status" value="Watching" onChange={(e) => setReviewData({ ...reviewData, watchStatus: e.target.value })} />
            <label for="watching">Watching</label>
            <input type="radio" id="on-hold" name="watch_status" value="On-Hold" onChange={(e) => setReviewData({ ...reviewData, watchStatus: e.target.value })}/>
            <label for="on-hold">On-Hold</label>
            <input type="radio" id="dropped" name="watch_status" value="Dropped" onChange={(e) => setReviewData({ ...reviewData, watchStatus: e.target.value })}/>
            <label for="dropped">Dropped</label>
            
            <p>Opinion</p>
            <input type="radio" id="would-recommend" name="opinion" value="Would Recommend" onChange={(e) => setReviewData({ ...reviewData, opinion: e.target.value })}/>
            <label for="would-recommend">Would Recommend</label>
            <input type="radio" id="mixed-opinion" name="opinion" value="Mixed Opinion" onChange={(e) => setReviewData({ ...reviewData, opinion: e.target.value })}/>
            <label for="mixed-opinion">Mixed Opinion</label>
            <input type="radio" id="would-not-recommend" name="opinion" value="Would Not Recommend" onChange={(e) => setReviewData({ ...reviewData, opinion: e.target.value })}/>
            <label for="would-not-recommend">Would Not Recommend</label>
            <div>
              <StarRating name="Story" reviewData={reviewData} setReviewData={setReviewData} />
              <StarRating name="Characters" reviewData={reviewData} setReviewData={setReviewData}/>
              <StarRating name="Animation" reviewData={reviewData} setReviewData={setReviewData}/>
              <StarRating name="Sound" reviewData={reviewData} setReviewData={setReviewData}/>
              <StarRating name="Vibe" reviewData={reviewData} setReviewData={setReviewData}/>
            </div>
            <input type="submit"/>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default RatingModal