import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

export const CloseButton = ({
  setAddButtonClick,
  setMarkProductId,
  setProduct,
  emptyProductObject,
}) => {
  // Close button clicked - clear product object
  const closeButtonClicked = () => {
    setAddButtonClick(false);
    setMarkProductId(null);
    setProduct(emptyProductObject);
  };

  return (
    <div onClick={closeButtonClicked}>
      <FontAwesomeIcon
        icon={faWindowClose}
        style={{
          fontSize: '2em',
          color: 'Black',
          position: 'absolute',
          right: '0px',
        }}
      />
    </div>
  );
};
