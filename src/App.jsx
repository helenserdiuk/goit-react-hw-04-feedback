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

  const onLeaveFeedback = ({ target }) => {
    const name = target.name;
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

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = ({ target }) => {
//     const name = target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     const percent = (good * 100) / total;
//     return Math.round(percent);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercent = this.countPositiveFeedbackPercentage();

//     const objKey = Object.keys(this.state);
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={objKey}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {!total ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercent={positivePercent}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
