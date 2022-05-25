import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header style={{ backgroundColor: "blue", color: "red" }}>
      <div className="container">
        <h2> {props.text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
