import React from "react";
import PropTypes from "prop-types";
import css from "./Feedback.module.css";

function Feedback({ options, onLeaveFeedback }) {
  return (
    <ul className={css.listBtn}>
      {options.map((option) => {
        return (
          <li key={option}>
            <button
              className={css.btn}
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
