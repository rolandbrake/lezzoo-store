import {
  CREATE_CATEGORY,
  RETRIEVE_CATEGORIES,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  DELETE_STORE_CATEGORIES,
} from "../actions/categoriesAction";

const initialState = [];

const categoryReducer = (categories = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CATEGORY:
      return [...categories, payload];

    case RETRIEVE_CATEGORIES:
      return payload;

    case UPDATE_CATEGORY:
      return categories.map((category) => {
        if (category.id === payload.id) {
          return {
            ...category,
            ...payload,
          };
        } else {
          console.log(UPDATE_CATEGORY);
          return category;
        }
      });

    case DELETE_CATEGORY:
      return categories.filter(({ id }) => id !== payload.id);

    case DELETE_STORE_CATEGORIES:
      return categories.filter(({ storeId }) => storeId !== payload.storeId);
    default:
      return categories;
  }
};

export default categoryReducer;
