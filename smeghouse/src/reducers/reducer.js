import { combineReducers } from "redux";
import { products} from "./products";
import { filters } from "./filters";
import { contacts } from "./contacts";

const reducer = combineReducers({
  products,
  filters,
  contacts
});

export default reducer
