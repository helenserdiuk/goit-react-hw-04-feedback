import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(key => (
      <button
        key={key}
        className={styles.btnStyle}
        type="button"
        onClick={() => onLeaveFeedback(key)}
      >
        {key}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
