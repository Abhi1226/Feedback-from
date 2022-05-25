import React from "react";
import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";

import FeedbackContext from "../context/FeedbackContext";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedbackForm() {
  const [text, setText] = useState("");

  const [rating, setrating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setrating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Text must be of atleast 10 characters");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      //addFeedback(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setrating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
