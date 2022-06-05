import React, { useState } from "react";
import { reviews } from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(1);
  const { name, job, text, image } = reviews[index];
  const checkNumber = (number) => {
    number > reviews.length - 1
      ? (number = 0)
      : number < 0
      ? (number = reviews.length - 1)
      : // eslint-disable-next-line no-self-assign
        (number = number);
    return number;
  };
  const prevFunction = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextFunction = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <section className="singleReview">
      <div className="holder">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="quoteIcon">
          <FaQuoteRight size={"1.4em"} color={"white"} className="ico" />
        </div>
      </div>
      <div className="texts">
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </div>
      <div className="buttons">
        <button className="prev-btn" onClick={prevFunction}>
          <FaChevronLeft size={"1.6em"} color={"lightskyblue"} />
        </button>
        <button className="next-btn" onClick={nextFunction}>
          <FaChevronRight size={"1.6em"} color={"lightskyblue"} />
        </button>
      </div>
    </section>
  );
};

export default Review;
