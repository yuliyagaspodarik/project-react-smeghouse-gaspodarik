export const initState = (data) => ({
  type: "INIT_STATE",
  payload: {
    data: data
  }
});

export const searchProducts = (value) => ({
  type: "SEARCH_PRODUCTS",
  payload: {
    data: value
  }
});
