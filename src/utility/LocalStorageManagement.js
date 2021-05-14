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

export const generateIdFromLocalStorage = () => {
  // Get last id number
  let lastIdValue = JSON.parse(localStorage.getItem('lastIdValue')) || 0;

  // Save new last id number
  localStorage.setItem('lastIdValue', JSON.stringify(lastIdValue + 1));

  return lastIdValue;
};
