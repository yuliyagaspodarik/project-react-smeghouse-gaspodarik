import { abc } from "../api/helpers";

const initialState = {
  products: [],
  searchedProducts: [],
  filters: [],
  contacts: []
};

export const reducer = (state  = initialState, action) => {
  switch (action.type) {
    case "INIT_STATE":
      return {
        products: action.payload.data.products.sort(abc),
        filters: action.payload.data.filters.sort(abc),
        contacts: action.payload.data.contacts,
        searchedProducts: state.searchedProducts};
    case "SEARCH_PRODUCTS":
      return {
        products: state.products,
        filters: state.filters,
        contacts: state.contacts,
        searchedProducts: state.products.filter(product => (JSON.stringify(product.name) + JSON.stringify(product.article) + JSON.stringify(product.category)).toLowerCase().indexOf(action.payload.searchedProducts.toLowerCase()) !== -1).sort(abc)
      };
    case "CHECK_FILTER":
      return {
        products: state.products,
        filters: state.filters,
        contacts: state.contacts,
        searchedProducts: state.products.filter(product => product.category === action.payload.filter.name && action.payload.filter.checked).sort(abc)
      };
    case "TOGGLE_FILTER":
      const filters = state.filters.map(filter => filter.name === action.payload.filter.name ? {name: filter.name, checked:!filter.checked} : filter);
      const searchedProducts = state.products.filter(product => JSON.stringify(filters.filter(filter => filter.checked)).indexOf(product.category) !== -1);

      return {
        products: state.products,
        filters,
        contacts: state.contacts,
        searchedProducts
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
