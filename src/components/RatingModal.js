import React, { useState } from 'react';
import Modal from 'react-modal';
import { Rating } from 'react-simple-star-rating';
import { AiOutlineClose } from 'react-icons/ai';

const RatingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add Review</button>
      <Modal 
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal} className="absolute right-0 top-0 p-4 text-xl"><AiOutlineClose /></button>
        <div className="flex flex-col text-center mt-5">
          <h1 className="text-3xl">Write a Review</h1>
          <form>
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

          </form>
        </div>
      </Modal>
    </div>
  )
}

export default RatingModal