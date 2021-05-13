import React, { useRef } from 'react';
import './ProductElement.css';
import { formatDate } from '../../utility/Utility';

const ProductElement = ({
  id,
  productDetails,
  markProductId,
  setMarkProductId,
  setAddButtonClick,
  setProductIdToDelete,
  finishDeleteProduct,
}) => {
  const booleanDeleteButtonClicked = useRef(false);

  // Update chosen product id and cancel add button clicked
  const productClicked = () => {
    // Disable product element when clicked two times in a row
    if (markProductId === id) {
      setMarkProductId(null);
      return;
    }
    // Dont mark when delete button clicked
    if (!booleanDeleteButtonClicked.current) {
      setMarkProductId(id);
      setAddButtonClick(false);
    }
  };

  const deleteButtonClicked = () => {
    booleanDeleteButtonClicked.current = true;
    finishDeleteProduct.current = false;
    setProductIdToDelete(id);
  };

  return (
    <div
      className='element-wrapper'
      style={{
        backgroundColor: markProductId === id ? 'rgb(11, 43, 11)' : null,
      }}
      onClick={productClicked}
    >
      <div className='image-wrapper'>
        <img
          className='image'
          src={productDetails.imageUrl}
          alt='product illustration'
        />
      </div>
      <div className='details-wrapper'>
        <textarea className='title' disabled value={productDetails.title} />
        <textarea
          className='description'
          disabled={true}
          value={productDetails.description}
        />
      </div>
      <div className='date'>
        {productDetails.date !== null ? formatDate(productDetails.date) : null}
      </div>
      <div className='delete-button-wrapper'>
        <div className='price'>{productDetails.price}$</div>
        <button className='delete-button' onClick={deleteButtonClicked}>
          delete button
        </button>
      </div>
    </div>
  );
};

export default ProductElement;
