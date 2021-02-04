const initialState = {
  products: [],
  searchedProducts: [],
  filters: [],
  contacts: []
};

export const reducer = (state  = initialState, action) => {
  switch (action.type) {
    case "INIT_STATE":
      return {...action.payload.data, searchedProducts: state.searchedProducts};
    case "SEARCH_PRODUCTS":
      return {
        products: state.products,
        filters: state.filters,
        contacts: state.contacts,
        searchedProducts: state.products.filter(product => (JSON.stringify(product.name) + JSON.stringify(product.article) + JSON.stringify(product.category)).toLowerCase().indexOf(action.payload.searchedProducts.toLowerCase()) !== -1)
      };
    case "CHECK_FILTER":
      return {
        products: state.products,
        filters: state.filters,
        contacts: state.contacts,
        searchedProducts: state.products.filter(product => product.category === action.payload.filter.name && action.payload.filter.checked)
      };
    case "ADD_TO_FAVORITES": break;
    case "ADD_TO_STOCK": break;
    case "LOG_IN": break;
    case "LOG_OUT": break;
    default:
      return state;
  }
};

export default reducer
