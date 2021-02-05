export const initState = (data) => ({
  type: "INIT_STATE",
  payload: {
    data
  }
});

export const searchProducts = (searchedProducts) => ({
  type: "SEARCH_PRODUCTS",
  payload: {
    searchedProducts
  }
});

export const checkFilter = (filter) => ({
  type: "CHECK_FILTER",
  payload: {
    filter
  }
});

export const toggleFilter = (filter) => ({
    type: "TOGGLE_FILTER",
    payload: {
      filter
    }
});
