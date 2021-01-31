const initialState = [];
  /*filters: [],
  favorites: [],
  stock: [],
  users: []*/


export const reducer = (state  = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
       return state.concat(action.payload.data);
    case "CHECK_FILTER": break;
    case "ADD_TO_FAVORITES": break;
    case "ADD_TO_STOCK": break;
    case "LOG_IN": break;
    case "LOG_OUT": break;
    default:
      return state;
  }
};
