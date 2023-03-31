import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import '../styles.css';

export const ImageGallery = ({ items, onGetImages }) => {
  return (
    <>
      <ul className="ImageGallery">
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            item={item}
            getItemOnClick={onGetImages}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  onGetImages: PropTypes.func.isRequired,
};
