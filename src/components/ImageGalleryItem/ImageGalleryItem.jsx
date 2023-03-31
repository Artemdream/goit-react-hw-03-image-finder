import PropTypes from 'prop-types';

import '../styles.css';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  getItemOnClick,
}) => {
  const onClickImage = () => {
    getItemOnClick(largeImageURL);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={onClickImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getItemOnClick: PropTypes.func.isRequired,
};
