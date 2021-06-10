import {
  CREATE_PRODUCT,
  RETRIEVE_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_CATEGORY_PRODUCTS,
} from "../actions/productsAction";

const initialState = [];

const productReducer = (products = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return [...products, payload];

    case RETRIEVE_PRODUCTS:
      return payload;

    case UPDATE_PRODUCT:
      return products.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            ...payload,
          };
        } else {          
          return product;
        }
      });

    case DELETE_PRODUCT:
      return products.filter(({ id }) => id !== payload.id);

    case DELETE_CATEGORY_PRODUCTS:
      return products.filter(
        ({ categoryId }) => categoryId !== payload.categoryId
      );
    default:
      return products;
  }
};

export default productReducer;
