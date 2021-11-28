import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./Review.css";

const Review = () => {
  const [alert, setAlert] = useState(false);

  const [reviewData, setReviewData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...reviewData };
    newReviewData[field] = value;
    setReviewData(newReviewData);
  };
  const handleLoginSubmit = (e) => {
    e.target.reset();
    e.preventDefault();

    fetch("https://frozen-taiga-35843.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setTimeout(() => {
            setAlert(true);
          }, 1000);
        }
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-12 d-none d-md-flex bg-image"></div>
          <div className="col-md-12 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                {alert && (
                  <Container className="mx-auto w-50">
                    <Alert variant="success">Review Added Succesfully!</Alert>
                  </Container>
                )}
                <div className="row">
                  <div className="col-lg-7 col-xl-6 mx-auto">
                    <h3 className="display-4">Add Review</h3> <br />
                    <form onSubmit={handleLoginSubmit}>
                      <div className="form-group mb-3">
                        {" "}
                        <input
                          id="inputName"
                          type="text"
                          name="name"
                          onBlur={handleOnBlur}
                          placeholder="Name"
                          required=""
                          autofocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />{" "}
                      </div>
                      <div className="form-group mb-3">
                        {" "}
                        <input
                          id="inputProfession"
                          type="text"
                          name="profession"
                          onBlur={handleOnBlur}
                          placeholder="Profession"
                          required=""
                          autofocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />{" "}
                      </div>
                      <div className="form-group ">
                        {" "}
                        <input
                          id="inputRating"
                          name="rating"
                          onBlur={handleOnBlur}
                          type="number"
                          placeholder="Rating"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                        />
                        <br />{" "}
                      </div>
                      <div className="form-group">
                        {" "}
                        <input
                          id="inputImage"
                          name="image"
                          onBlur={handleOnBlur}
                          type="url"
                          placeholder="Profile Image URL"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                        />
                        <br />{" "}
                      </div>
                      <div className="form-group ">
                        {" "}
                        <input
                          id="inputReview"
                          name="review"
                          onBlur={handleOnBlur}
                          type="textarea"
                          placeholder="Write a Review"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                        />
                        <br />{" "}
                      </div>

                      <button
                        type="submit"
                        className="btn submit__btn btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
