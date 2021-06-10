import CategoryService from "../services/CategoryService";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const RETRIEVE_CATEGORIES = "RETRIEVE_CATEGORIES";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

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
  } catch (err) {
    console.log(err);
  }
};

export const updateCategory = (id, data) => async (dispatch) => {
  try {
    const res = await CategoryService.update(id, data);

    dispatch({
      type: UPDATE_CATEGORY,
      payload: data,
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
  } catch (err) {
    console.log(err);
  }
};
