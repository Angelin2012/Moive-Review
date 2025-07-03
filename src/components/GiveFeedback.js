import React from 'react';
import ReviewForm from '../components/ReviewForm';
import './GiveFeedback.css';

const GiveFeedback = ({ addReview }) => {
  return (
    <div className="feedback-page">
      <h2>Give Your Movie Feedback</h2>
      <ReviewForm onSubmit={addReview} />
    </div>
  );
};

export default GiveFeedback;
