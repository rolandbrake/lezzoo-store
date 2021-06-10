import ProductService from "../services/ProductService";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const RETRIEVE_PRODUCTS = "RETRIEVE_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_STORE_PRODUCTS = "DELETE_STORE_PRODUCTS";
export const DELETE_CATEGORY_PRODUCTS = "DELETE_CATEGORY_PRODUCTS";

export const createProduct = (product) => async (dispatch) => {
  const { title, description, imageURL, categoryId, price } = product;
  try {
    const res = await ProductService.create({
      title,
      description,
      imageURL,
      price,
      categoryId,
    });
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveProducts = (categoryId) => async (dispatch) => {
  console.log({ categoryId });
  try {
    const res = await ProductService.getAll(categoryId);
    dispatch({
      type: RETRIEVE_PRODUCTS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const res = await ProductService.update(id, data);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: { id, ...data },
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductService.delete(id);

    dispatch({
      type: DELETE_PRODUCT,
      payload: { id },
    });
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};
