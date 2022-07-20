import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const percent = Math.round((good * 100) / total);

  const objKey = Object.keys(state);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercent={percent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
