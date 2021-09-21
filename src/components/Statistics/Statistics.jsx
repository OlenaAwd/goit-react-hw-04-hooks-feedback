import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p className={css.good}> Good: {good}</p>
      <p className={css.neutral}>Neutral: {neutral}</p>
      <p className={css.bad}>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};
