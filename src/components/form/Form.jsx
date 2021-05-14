import React, { useState, useEffect, useRef } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { initialProductArray } from '../../redux/items/items.actions';
import { inputsValidation, emptyProductObject } from '../../utility/Utility';
import {
  addProductToaLastAddedLocalStorage,
  updateProductInLastAddedLocalStorage,
  generateIdFromLocalStorage,
  getLastAddedProductsList,
} from '../../utility/LocalStorageManagement';
import { ProductImage } from '../product-image/ProductImage';
import { CloseButton } from '../close-button/CloseButton';

const DisplayElement = ({
  initialProductArray,
  addButtonClick,
  setAddButtonClick,
  currentItems,
  markProductId,
  setMarkProductId,
  selectSort,
}) => {
  const [product, setProduct] = useState({
    id: null,
    imageUrl: null,
    date: null,
    title: '',
    description: '',
    price: '',
  });
  const [finishSaveProduct, setFinishSaveProduct] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const updateExistProduct = useRef(false);

  // For distinguish between update to save new product
  const saveNewProduct = useRef(false);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  // Add button clicked
  useEffect(() => {
    if (addButtonClick || finishSaveProduct) {
      setProduct(emptyProductObject);
      setMarkProductId(null);
    }
  }, [addButtonClick, finishSaveProduct]);

  // Update form with product data when product in products list has been clicked
  useEffect(() => {
    // Get product from list
    let productToDisplay = currentItems.find(
      (product) => product.id === markProductId
    );
    if (markProductId !== null) {
      setProduct({
        id: productToDisplay.id,
        imageUrl: productToDisplay.imageUrl,
        date: productToDisplay.date,
        title: productToDisplay.title,
        description: productToDisplay.description,
        price: productToDisplay.price,
      });
    }
  }, [markProductId, currentItems]);

  // Update product
  useEffect(() => {
    setFinishSaveProduct(false);

    // Check if need to update product
    if (updateExistProduct.current) {
      let validationResult = inputsValidation(product);
      setErrorMessage(validationResult);

      if (validationResult === null) {
        // Update product to local storage lists
        updateProductInLastAddedLocalStorage(product);

        // Get update products list elements and update state
        let updateArray = getLastAddedProductsList();
        initialProductArray(updateArray, selectSort);

        setFinishSaveProduct(true);
        updateExistProduct.current = false;
      } else {
        updateExistProduct.current = false;
      }
    }
  }, [product, initialProductArray, selectSort]);

  // Create new Product
  useEffect(() => {
    setFinishSaveProduct(false);

    // Check product date and id state is available
    if (
      product.date !== null &&
      product.id !== null &&
      saveNewProduct.current
    ) {
      let validationResult = inputsValidation(product);
      setErrorMessage(validationResult);

      if (validationResult === null) {
        // Add product to local storage lists
        addProductToaLastAddedLocalStorage(product);

        // Get update products list elements and update state
        let updateArray = getLastAddedProductsList();
        initialProductArray(updateArray, selectSort);

        setFinishSaveProduct(true);
        saveNewProduct.current = false;
      } else {
        saveNewProduct.current = false;
      }
    }
  }, [product, initialProductArray, selectSort]);

  const saveButtonClicked = async () => {
    // When product need to be update
    if (markProductId !== null) {
      updateExistProduct.current = true;
      setProduct({ ...product, date: new Date() });
    }
    // When product need to be save
    else {
      saveNewProduct.current = true;
      setProduct({
        ...product,
        id: generateIdFromLocalStorage(),
        date: new Date(),
      });
    }
  };

  return addButtonClick || markProductId !== null ? (
    <div className='prducts-display-wrapper'>
      <div className='prducts-display-sub-wrapper'>
        <CloseButton
          setAddButtonClick={setAddButtonClick}
          setMarkProductId={setMarkProductId}
          setProduct={setProduct}
          emptyProductObject={emptyProductObject}
        />

        <div className='display-title'>Product Details</div>

        <ProductImage product={product} setProduct={setProduct} />

        <div className='display-title'>Title</div>
        <input
          className='product-name'
          name='title'
          type='text'
          onChange={handleChange}
          value={product.title}
        />

        <div className='display-title'>Description</div>
        <textarea
          className='product-description'
          name='description'
          value={product.description}
          onChange={handleChange}
        />

        <div className='display-title'>Price</div>
        <div className='bottom-wrapper'>
          <input
            className='product-price'
            name='price'
            type='number'
            value={product.price}
            onChange={handleChange}
          />
          <div className='error-wrapper'>
            <div className='error-message'>{errorMessage}</div>
          </div>
          <button className='save-button' onClick={saveButtonClicked}>
            Save
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const mapDispatchToProps = (dispatch) => ({
  initialProductArray: (itemsArray, selectSort) =>
    dispatch(initialProductArray(itemsArray, selectSort)),
});

const mapStateToProps = (state) => ({
  currentItems: state.items.currentItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayElement);
