import { combineReducers } from "redux";
import { products} from "./products";
import { filters } from "./filters";
import { contacts } from "./contacts";
import { searchedProducts } from "./searchedProducts";

const reducer = combineReducers({
  products,
  filters,
  contacts,
  searchedProducts
});

export default reducer
