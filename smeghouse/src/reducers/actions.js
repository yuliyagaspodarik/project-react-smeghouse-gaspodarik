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

export const toggleFilter = (filter) => ({
  type: "TOGGLE_FILTER",
  payload: {
    filter
  }
});

export const toggleAll = (checked) => ({
  type: "TOGGLE_ALL",
  payload: {
    checked
  }
});

export const checkCategory = (filterName) => ({
  type: "CHECK_CATEGORY",
  payload: {
    filterName
  }
});
