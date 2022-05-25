import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";

function FeedbackPage() {
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  );
}

export default FeedbackPage;
