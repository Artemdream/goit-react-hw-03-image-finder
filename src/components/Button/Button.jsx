import PropTypes from 'prop-types';
import '../styles.css';

export const Button = ({ onLoadMore }) => (
  <button tupe="button" className="Button" onClick={onLoadMore()}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
