import {createStore} from "redux";
import reducer from "../reducers/reducer";
import {getData} from "../api/requests";
import {initState} from "../actions/actions";

const store = createStore(reducer);

(async function initStateData() {
  const data = {
    products: await getData("products"),
    filters: await getData("filters"),
    contacts: await getData("contacts")
  };

  store.dispatch(initState(data));
})();

export default store;
