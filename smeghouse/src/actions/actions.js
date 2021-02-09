export function initState(data) {
  return {
    type: "INIT_STATE",
    payload: {
      data
    }
  };
}

export function searchProducts(searchedProducts) {
  return {
    type: "SEARCH_PRODUCTS",
    payload: {
      searchedProducts
    }
  };
}

export function toggleFilter(filter) {
  return {
    type: "TOGGLE_FILTER",
    payload: {
      filter
    }
  };
}

export function toggleAll(checked) {
  return {
    type: "TOGGLE_ALL",
    payload: {
      checked
    }
  };
}

export function checkCategory(filterName) {
  return {
    type: "CHECK_CATEGORY",
    payload: {
      filterName
    }
  };
}

export function addToFavorite(article) {
  return {
    type: "ADD_TO_FAVORITE",
    payload: {
      article
    }
  };
}

export function addToStock(article) {
  return {
    type: "ADD_TO_STOCK",
    payload: {
      article
    }
  };
}
