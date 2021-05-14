import React, { useState, useEffect, useRef } from 'react';
import './ProductsList.css';
import { NUM_OF_PRODUCTS_IN_PAGE } from '../../utility/Constants';
import { filterListResults } from '../../utility/Utility';
import {
  deleteProductInLastAddedLocalStorage,
  getLastAddedProductsList,
} from '../../utility/LocalStorageManagement';
import { connect } from 'react-redux';
import { initialProductArray } from '../../redux/items/items.actions';
import { PageNumberNevigator } from '../page-number-nevigator/PageNumberNevigator';
import Form from '../form/Form';
import ProductElement from '../product-element/ProductElement';

const ProductsList = ({
  addButtonClick,
  setAddButtonClick,
  searchField,
  currentItems,
  initialProductArray,
  selectSort,
}) => {
  const [markProductId, setMarkProductId] = useState(null);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [page, setPage] = useState(1);
  const isFirstArrayInitialize = useRef(true);
  const finishDeleteProduct = useRef(false);

  // When select change, update list order by selectSort value
  useEffect(() => {
    let productsArray = getLastAddedProductsList();
    initialProductArray(productsArray, selectSort);
    setPage(1);
  }, [selectSort, initialProductArray]);

  // Filter update array with current search field input
  useEffect(() => {
    let filteredArray = [];
    for (let i = 0; i < currentItems.length; i++) {
      if (filterListResults(currentItems[i], searchField)) {
        filteredArray.push(currentItems[i]);
      }
    }
    setFilteredProductList(filteredArray);

    //Dont show no products message in first render
    isFirstArrayInitialize.current = false;
  }, [currentItems, searchField]);

  // After each update in product list, remove background mark from element
  useEffect(() => {
    setMarkProductId(null);
    setProductIdToDelete(null);
  }, [currentItems]);

  // In case user delete product and there is no products left in page
  useEffect(() => {
    if (
      currentItems.length % NUM_OF_PRODUCTS_IN_PAGE === 0 &&
      page * NUM_OF_PRODUCTS_IN_PAGE > currentItems.length &&
      page > 1
    ) {
      setPage(page - 1);
    }
  }, [page, currentItems]);

  // When delete button in one of the product press
  useEffect(() => {
    if (productIdToDelete !== null && !finishDeleteProduct.current) {
      setMarkProductId(null);

      // Get product from list
      let productToDelete = currentItems.find(
        (product) => product.id === productIdToDelete
      );

      // Update lists in local storage and update state
      deleteProductInLastAddedLocalStorage(productToDelete);
      let updateArray = getLastAddedProductsList();

      initialProductArray(updateArray, selectSort);

      // Avoid from second delete
      finishDeleteProduct.current = true;
    }
  }, [productIdToDelete, initialProductArray, selectSort, currentItems]);

  const createPageProductsElements = () => {
    let productsArrayResult = [];
    // Display 4 products in each page
    for (
      let i = (page - 1) * NUM_OF_PRODUCTS_IN_PAGE;
      i < NUM_OF_PRODUCTS_IN_PAGE * page;
      i++
    ) {
      if (filteredProductList[i] === undefined) {
        break;
      }
      productsArrayResult.push(
        <ProductElement
          key={i}
          id={filteredProductList[i].id}
          markProductId={markProductId}
          setMarkProductId={setMarkProductId}
          setAddButtonClick={setAddButtonClick}
          productDetails={filteredProductList[i]}
          setProductIdToDelete={setProductIdToDelete}
          currentItems={currentItems}
          finishDeleteProduct={finishDeleteProduct}
        />
      );
    }
    return productsArrayResult;
  };

  return (
    <div className='products-display-container-wrapper'>
      <div>
        {filteredProductList.length === 0 && !isFirstArrayInitialize.current ? (
          <div className='no-products-message'>No Products</div>
        ) : (
          <div>
            <div className='products-display-container'>
              {filteredProductList.length > 0
                ? createPageProductsElements()
                : null}
            </div>
            <PageNumberNevigator
              page={page}
              setPage={setPage}
              filteredProductList={filteredProductList}
            />
          </div>
        )}
      </div>
      <Form
        addButtonClick={addButtonClick}
        setAddButtonClick={setAddButtonClick}
        markProductId={markProductId}
        setMarkProductId={setMarkProductId}
        setProductIdToDelete={setProductIdToDelete}
        selectSort={selectSort}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentItems: state.items.currentItems,
});

const mapDispatchToProps = (dispatch) => ({
  initialProductArray: (itemsArray, selectSort) =>
    dispatch(initialProductArray(itemsArray, selectSort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
