import ItemActionType from './items.type';

export const initialProductArray = (productsArray, selectSort) => ({
  type: ItemActionType.INITIAL_ITEMS_ARRAY,
  payload: { productsArray: productsArray, selectSort: selectSort },
});
