import {
  EMPTY_INPUT_ERROR_MESSAGE,
  PRICE_MIN_ERROR_MESSAGE,
  TITLE_ERROR_MESSAGE,
  DESCRIPTION_ERROR_MESSAGE,
  PRICE_MAX_ERROR_MESSAGE,
  MAX_PRICE_CHAR,
  MAX_TITLE_CHAR,
  MAX_DESCRIPTION_CHAR,
  IMAGE_ERROR_MESSAGE,
} from '../utility/Constants';

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export let emptyProductObject = {
  id: null,
  imageUrl: null,
  date: null,
  title: '',
  description: '',
  price: '',
};

export const inputsValidation = (product) => {
  switch (true) {
    case product.title.length > MAX_TITLE_CHAR:
      return TITLE_ERROR_MESSAGE;

    case product.description.length > MAX_DESCRIPTION_CHAR:
      return DESCRIPTION_ERROR_MESSAGE;

    case product.price.length > MAX_PRICE_CHAR:
      return PRICE_MAX_ERROR_MESSAGE;

    case product.title === '' ||
      product.description === '' ||
      product.price === '':
      return EMPTY_INPUT_ERROR_MESSAGE;

    case product.price <= 0:
      return PRICE_MIN_ERROR_MESSAGE;

    case product.imageUrl === null:
      return IMAGE_ERROR_MESSAGE;

    default:
      return null;
  }
};

export const filterListResults = (product, searchField) => {
  if (
    product.title.toLowerCase().includes(searchField.toLowerCase()) ||
    product.description.toLowerCase().includes(searchField.toLowerCase())
  ) {
    return true;
  } else return false;
};

// Compare implementation depends on select value

export const compareHighestPrice = (product1, product2) => {
  if (parseInt(product1.price) < parseInt(product2.price)) {
    return -1;
  }
  if (parseInt(product1.price) > parseInt(product2.price)) {
    return 1;
  }
  return 0;
};

export const compareLowestPrice = (product1, product2) => {
  if (parseInt(product1.price) > parseInt(product2.price)) {
    return -1;
  }
  if (parseInt(product1.price) < parseInt(product2.price)) {
    return 1;
  }
  return 0;
};

export const compareLastAdded = (product1, product2) => {
  if (parseInt(product1.date) < parseInt(product2.date)) {
    return -1;
  }
  if (parseInt(product1.date) > parseInt(product2.date)) {
    return 1;
  }
  return 0;
};

export const compareTitle = (product1, product2) => {
  if (parseInt(product1.date) < parseInt(product2.date)) {
    return -1;
  }
  if (parseInt(product1.date) > parseInt(product2.date)) {
    return 1;
  }
  return 0;
};
