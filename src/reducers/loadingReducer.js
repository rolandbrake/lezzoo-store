const INITIAL_STATE = {
  loading: false,
};

const applySetLoading = (state, action) => ({
  ...state,
  loading: action.loading,
});

function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOADING_SET": {
      return applySetLoading(state, action);
    }
    default:
      return state;
  }
}

export default loadingReducer;
