import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ReviewsPage() {
  // Predefined hardcoded reviews
  const hardcodedReviews = [
    {
      id: "1",
      name: "Michael Scott",
      feedback: "The world's best burger joint! That's what she said!",
      image: "https://via.placeholder.com/150/0000FF", // Example placeholder
    },
    {
      id: "2",
      name: "Pam Beesly",
      feedback: "I loved the fries! So crispy and flavorful.",
      image: "https://via.placeholder.com/150/FF5733", // Example placeholder
    },
    {
      id: "3",
      name: "Jim Halpert",
      feedback: "Great service and even better food! Highly recommended.",
      image: "https://via.placeholder.com/150/28A745", // Example placeholder
    },
  ];

  const [reviews, setReviews] = useState(hardcodedReviews); // Initialize with hardcoded reviews
  const [newReview, setNewReview] = useState({
    name: "",
    feedback: "",
    image: "",
  });

  // Fetch dynamic reviews from the backend (optional, if backend is ready)
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get("/api/reviews");
      setReviews((prev) => [...prev, ...data]); // Merge hardcoded and dynamic reviews
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewReview((prev) => ({ ...prev, image: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    const newReviewWithId = { ...newReview, id: Date.now().toString() }; // Temporary ID
    try {
      // If backend exists, you can post the review:
      // const { data } = await axios.post("/api/reviews", newReview);
      setReviews((prev) => [...prev, newReviewWithId]); // Add locally
      setNewReview({ name: "", feedback: "", image: "" }); // Reset form
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleDeleteReview = (id) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  return (
    <div className="reviews-page">
      <h1>Customer Reviews</h1>

      {/* Reviews Form */}
      <form className="review-form" onSubmit={handleAddReview}>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Feedback"
          value={newReview.feedback}
          onChange={handleInputChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit">Add Review</button>
      </form>

      {/* Display Reviews */}
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={`${review.name}'s feedback`} />
            <h3>{review.name}</h3>
            <p>{review.feedback}</p>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
