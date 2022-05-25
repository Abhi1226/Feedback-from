import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About THis Project</h1>
        <p>THis is a feedback page to</p>
        <p>
          <Link to="/">Back to home page</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
