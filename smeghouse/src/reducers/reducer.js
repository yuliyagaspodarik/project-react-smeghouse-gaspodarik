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
        searchedProducts: action.payload.data.products.sort(abc)};
    case "SEARCH_PRODUCTS":
      const searchedProductsInSearch = state.products.filter(product => (JSON.stringify(product.name) + JSON.stringify(product.article) + JSON.stringify(product.category)).toLowerCase().indexOf(action.payload.searchedProducts.toLowerCase()) !== -1).sort(abc);
      const filtersInSearch = state.filters.map(filter => searchedProductsInSearch.map(product => product.category).includes(filter.name) ? {name: filter.name, checked: true} : {name: filter.name, checked: false});

      return {
        products: state.products,
        filters: filtersInSearch,
        contacts: state.contacts,
        searchedProducts: searchedProductsInSearch
      };
    case "TOGGLE_FILTER":
      const filtersToggleFilters = state.filters.map(filter => filter.name === action.payload.filter.name ? {name: filter.name, checked:!filter.checked} : filter);
      const searchedProductsToggleFilters = state.products.filter(product => JSON.stringify(filtersToggleFilters.filter(filter => filter.checked)).indexOf(product.category) !== -1);

      return {
        products: state.products,
        filters: filtersToggleFilters,
        contacts: state.contacts,
        searchedProducts: searchedProductsToggleFilters
      };
    case "TOGGLE_ALL":
      return {
        products: state.products,
        filters: state.filters.map(filter => action.payload.checked ? {name: filter.name, checked: true} : {name: filter.name, checked: false}),
        contacts: state.contacts,
        searchedProducts: action.payload.checked ? state.products : []
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
