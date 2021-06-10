import StoreService from "../services/StoreService";
import { DELETE_STORE_CATEGORIES } from "./categoriesAction";

export const CREATE_STORE = "CREATE_STORE";
export const RETRIEVE_STORES = "RETRIEVE_STORES";
export const UPDATE_STORE = "UPDATE_STORE";
export const DELETE_STORE = "DELETE_STORE";
export const DELETE_ALL_STORES = "DELETE_ALL_STORES";

export const createStore = (store) => async (dispatch) => {
  const { title, description, imageURL } = store;
  try {
    const res = await StoreService.create({ title, description, imageURL });
    dispatch({
      type: CREATE_STORE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveStores = () => async (dispatch) => {
  try {
    const res = await StoreService.getAll();
    console.log({ res });
    dispatch({
      type: RETRIEVE_STORES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateStore = (id, data) => async (dispatch) => {
  try {
    const res = await StoreService.update(id, data);

    dispatch({
      type: UPDATE_STORE,
      payload: { id, ...data },
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteStore = (id) => async (dispatch) => {
  try {
    await StoreService.delete(id);

    dispatch({
      type: DELETE_STORE,
      payload: { id },
    });
    dispatch({
      type: DELETE_STORE_CATEGORIES,
      payload: { storeId: id },
    });
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteAllStores = () => async (dispatch) => {
  try {
    const res = await StoreService.deleteAll();

    dispatch({
      type: DELETE_ALL_STORES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
