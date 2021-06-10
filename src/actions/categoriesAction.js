import CategoryService from "../services/CategoryService";
import { DELETE_CATEGORY_PRODUCTS } from "./productsAction";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const RETRIEVE_CATEGORIES = "RETRIEVE_CATEGORIES";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const DELETE_STORE_CATEGORIES = "DELETE_STORE_CATEGORIES";

export const createCategory = (category) => async (dispatch) => {
  const { title, description, imageURL, storeId } = category;
  try {
    const res = await CategoryService.create({
      title,
      description,
      imageURL,
      storeId,
    });
    dispatch({
      type: CREATE_CATEGORY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveCategories = (storeId) => async (dispatch) => {
  try {
    const res = await CategoryService.getAll(storeId);
    dispatch({
      type: RETRIEVE_CATEGORIES,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateCategory = (id, data) => async (dispatch) => {
  console.log(data);
  try {
    const res = await CategoryService.update(id, data);

    dispatch({
      type: UPDATE_CATEGORY,
      payload: { id, ...data },
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await CategoryService.delete(id);

    dispatch({
      type: DELETE_CATEGORY,
      payload: { id },
    });
    dispatch({
      type: DELETE_CATEGORY_PRODUCTS,
      payload: { categoryId: id },
    });
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};
