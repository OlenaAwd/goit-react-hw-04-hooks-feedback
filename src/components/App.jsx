import { useState, useEffect } from "react";
import Container from "./Container/Container";
import Section from "./Section/Section";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Notific from "./Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentageFeedback, setPositivePercentageFeedback] =
    useState(0);

  const incrementClick = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentageFeedback(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={incrementClick}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentageFeedback}
          />
        ) : (
          <Notific message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}
