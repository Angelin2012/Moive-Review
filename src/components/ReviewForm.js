import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ title: '', rating: '', review: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setSubmitted(true);
    setForm({ title: '', rating: '', review: '' });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      {submitted && <p className="success">Review submitted!</p>}
      <label>Movie Title:</label>
      <input name="title" value={form.title} onChange={handleChange} required />

      <label>Rating:</label>
      <select name="rating" value={form.rating} onChange={handleChange} required>
        <option value="">Select</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      <label>Review:</label>
      <textarea name="review" value={form.review} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
