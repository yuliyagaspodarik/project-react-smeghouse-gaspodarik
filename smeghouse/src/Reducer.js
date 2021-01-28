const initialState = {
  products: [],
  filters: {
    status: "All",
    categories: []
  }
};

export const reducer = (state  = initialState, action) => {
  switch (action.type) {
    case "": break;
    case " ": break;
    default:
      throw new Error("Unknown action");
  }
};
