import React from "react";
import Rating from "react-rating";

function Review(props) {
  const { name, profession, rating, image, review } = props.review;

  return (
    <div className="testimonial-box">
      <div className="box-top">
        <div className="profile">
          <div className="profile-img">
            <img src={image} alt="" />
          </div>

          <div className="name-user">
            <strong>{name}</strong>
            <span>{profession}</span>
          </div>
        </div>

        <div className="reviews">
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          ></Rating>
        </div>
      </div>

      <div className="client-comment">
        <p>{review}</p>
      </div>
    </div>
  );
}

export default Review;
