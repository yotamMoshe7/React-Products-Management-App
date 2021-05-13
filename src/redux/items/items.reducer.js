import ItemActionType from './items.type';

const INITIAL_STATE = {
  currentItems: [],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionType.INITIAL_ITEMS_ARRAY:
      return {
        ...state,
        currentItems: action.payload,
      };

    default:
      return state;
  }
};

export default itemsReducer;
