import mongoose from 'mongoose';

const ReviewSchema = mongoose.Schema({
  creator: {
    type: String,
    required: true
  },
  watchStatus: {
    type: String,
    required: true
  },
  opinion: {
    type: String,
    required: true
  },
  storyStars: {
    type: Number,
    required: true
  },
  storyReview: {
    type: String,
    required: true
  },
  charactersStars: {
    type: Number,
    required: true
  },
  charactersReview: {
    type: String,
    required: true
  },
  animationStars: {
    type: Number,
    required: true
  },
  animationReview: {
    type: String,
    required: true
  },
  soundStars: {
    type: Number,
    required: true
  },
  soundReview: {
    type: String,
    required: true
  },
  vibeStars: {
    type: Number,
    required: true
  },
  vibeReview: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model("Review", ReviewSchema)