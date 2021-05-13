import {
  SELECT_HIGHER_PRICE,
  SELECT_LAST_ADDED,
  SELECT_TITLE,
} from '../utility/Constants';

// Last added storage management
export const addProductToaLastAddedLocalStorage = (product) => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsLastAddedSortList')) || [];
  productsArray.push(product);

  // Save products items to last added list local storage
  localStorage.setItem(
    'productsLastAddedSortList',
    JSON.stringify(productsArray)
  );
};

export const deleteProductInLastAddedLocalStorage = (product) => {
  let tempArray = [];
  let productsArray =
    JSON.parse(localStorage.getItem('productsLastAddedSortList')) || [];

  // Create new array without deleted product element
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id !== product.id) {
      tempArray.push(productsArray[i]);
    }
  }
  // Save products items to last added list local storage
  localStorage.setItem('productsLastAddedSortList', JSON.stringify(tempArray));
};

export const updateProductInLastAddedLocalStorage = (product) => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsLastAddedSortList')) || [];

  // Create new array without deleted product element
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === product.id) {
      productsArray[i] = product;
    }
  }
  // Save products items to last added list local storage
  localStorage.setItem(
    'productsLastAddedSortList',
    JSON.stringify(productsArray)
  );
};

export const getLastAddedProductsList = () => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsLastAddedSortList')) || [];

  return productsArray;
};

//-------------------------------------------------------------------------------

// Price sorted storage management
export const addProductToPriceSortedLocalStorage = (product) => {
  console.log('b');
  let productsArray =
    JSON.parse(localStorage.getItem('productsPriceSortList')) || [];

  // Find correct sorted position for new product element
  // In case of empty list
  if (productsArray.length === 0) {
    productsArray.push(product);
  }
  //In case last element is big then inserted element
  else if (
    parseInt(productsArray[productsArray.length - 1].price) >
    parseInt(product.price)
  ) {
    productsArray.push(product);
  } else {
    for (let i = 0; i < productsArray.length; i++) {
      if (parseInt(productsArray[i].price) < parseInt(product.price)) {
        console.log(productsArray[i].price);
        console.log(product);

        productsArray.splice(i, 0, product);
        break;
      }
    }
  }

  // Save products items to last added list local storage
  localStorage.setItem('productsPriceSortList', JSON.stringify(productsArray));
};

export const updateProductInPriceSortedLocalStorage = (product) => {
  // Delete product from list and add it again to correct sorted place
  deleteProductInPriceSortedLocalStorage(product);
  addProductToPriceSortedLocalStorage(product);
};

export const deleteProductInPriceSortedLocalStorage = (product) => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsPriceSortList')) || [];

  // Find product element in array and delete it
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === product.id) {
      productsArray.splice(i, 1);
      break;
    }
  }

  // Save products items to last added list local storage
  localStorage.setItem('productsPriceSortList', JSON.stringify(productsArray));
};

export const getPriceSortedProductsList = () => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsPriceSortList')) || [];

  return productsArray;
};

//-------------------------------------------------------------------------------

// Title sorted storage management
export const addProductToTitleSortedLocalStorage = (product) => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsTitleSortList')) || [];

  // Find correct sorted position for new product element
  // In case of empty list
  if (productsArray.length === 0) {
    productsArray.push(product);
  }
  //In case last element is big then inserted element
  else if (
    productsArray[productsArray.length - 1].title.toLowerCase() <
    product.title.toLowerCase()
  ) {
    productsArray.push(product);
  } else {
    for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].title.toLowerCase() > product.title.toLowerCase()) {
        productsArray.splice(i, 0, product);
        break;
      }
    }
  }

  // Save products items to last added list local storage
  localStorage.setItem('productsTitleSortList', JSON.stringify(productsArray));
};

export const updateProductInTitleSortedLocalStorage = (product) => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsTitleSortList')) || [];

  // Find product element in array and update it
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === product.id) {
      productsArray[i] = product;
      break;
    }
  }

  // Save products items to last added list local storage
  localStorage.setItem('productsTitleSortList', JSON.stringify(productsArray));
};

export const deleteProductInTitleSortedLocalStorage = (product) => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsTitleSortList')) || [];

  // Find product element in array and delete it
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === product.id) {
      productsArray.splice(i, 1);
      break;
    }
  }

  // Save products items to last added list local storage
  localStorage.setItem('productsTitleSortList', JSON.stringify(productsArray));
};

export const getTitleSortedProductsList = () => {
  let productsArray =
    JSON.parse(localStorage.getItem('productsTitleSortList')) || [];

  return productsArray;
};

// General function
export const getListFromLocalStorage = (selectSort) => {
  let updateArray = [];
  if (selectSort === SELECT_LAST_ADDED) {
    console.log(SELECT_LAST_ADDED);
    updateArray = getLastAddedProductsList();
  } else if (selectSort === SELECT_HIGHER_PRICE) {
    console.log(SELECT_HIGHER_PRICE);
    updateArray = getPriceSortedProductsList();
  } else if (selectSort === SELECT_TITLE) {
    console.log(SELECT_TITLE);
    updateArray = getTitleSortedProductsList();
  }
  return updateArray;
};

export const generateIdFromLocalStorage = (id) => {
  // Get last id number
  let lastIdValue = JSON.parse(localStorage.getItem('lastIdValue')) || 0;

  // Save new last id number
  localStorage.setItem('lastIdValue', JSON.stringify(lastIdValue + 1));

  return lastIdValue;
};
