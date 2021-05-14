import ItemActionType from './items.type';
import {
  compareLowestPrice,
  compareHighestPrice,
  compareLastAdded,
  compareTitle,
} from '../../utility/Utility';
import {
  SELECT_HIGHEST_PRICE,
  SELECT_LAST_ADDED,
  SELECT_LOWEST_PRICE,
  SELECT_TITLE,
} from '../../utility/Constants';

const INITIAL_STATE = {
  currentItems: [],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionType.INITIAL_ITEMS_ARRAY:
      // Get array and sort it by select value
      let productsArray = action.payload.productsArray;
      if (action.payload.selectSort === SELECT_HIGHEST_PRICE) {
        productsArray = productsArray.sort(compareLowestPrice);
      } else if (action.payload.selectSort === SELECT_LOWEST_PRICE) {
        productsArray = productsArray.sort(compareHighestPrice);
      } else if (action.payload.selectSort === SELECT_LAST_ADDED) {
        productsArray = productsArray.sort(compareLastAdded);
      }
      if (action.payload.selectSort === SELECT_TITLE) {
        productsArray = productsArray.sort(compareTitle);
      }

      return {
        ...state,
        currentItems: productsArray,
      };

    default:
      return state;
  }
};

export default itemsReducer;
