import ItemActionType from './items.type';

export const initialProductArray = (itemsArray) => ({
  type: ItemActionType.INITIAL_ITEMS_ARRAY,
  payload: itemsArray,
});
