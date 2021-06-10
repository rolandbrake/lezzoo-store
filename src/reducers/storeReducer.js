import {
  CREATE_STORE,
  RETRIEVE_STORES,
  UPDATE_STORE,
  DELETE_STORE,
  DELETE_ALL_STORES,
} from "../actions/storesAction";

const initialState = [];

const storeReducer = (stores = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_STORE:
      return [...stores, payload];

    case RETRIEVE_STORES:
      return payload;

    case UPDATE_STORE:
      return stores.map((store) => {
        if (store.id === payload.id) {
          return {
            ...store,
            ...payload,
          };
        } else {
          return store;
        }
      });

    case DELETE_STORE:
      return stores.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_STORES:
      return [];

    default:
      return stores;
  }
};

export default storeReducer;
