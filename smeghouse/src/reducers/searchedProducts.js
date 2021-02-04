export const searchedProducts = (state  = [], action) => {
  switch (action.type) {
    case "SET_STATE":
      return state.concat(action.payload.data.products);
    case "SEARCH_PRODUCTS":
      console.log('searproduct in reducer', [...state.filter(product => (JSON.stringify(product.name) + JSON.stringify(product.article) + JSON.stringify(product.category)).toLowerCase().indexOf(action.payload.data.toLowerCase()) !== -1)]);
      return [...state.filter(product => (JSON.stringify(product.name) + JSON.stringify(product.article) + JSON.stringify(product.category)).toLowerCase().indexOf(action.payload.data.toLowerCase()) !== -1)];
    case "CHECK_FILTER": break;
    case "ADD_TO_FAVORITES": break;
    case "ADD_TO_STOCK": break;
    case "LOG_IN": break;
    case "LOG_OUT": break;
    default:
      return state;
  }
};
