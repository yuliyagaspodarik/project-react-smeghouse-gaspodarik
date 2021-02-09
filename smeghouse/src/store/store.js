import {createStore} from "redux";
import reducer from "../reducers/reducer";
import {getData, getUserData} from "../api/requests";
import {initState} from "../actions/actions";

const store = createStore(reducer);

(async function initStateData() {
  let data = {
    products: await getData("products"),
    filters: await getData("filters"),
    contacts: await getData("contacts")
  };

  const userLocalStorage = JSON.parse(localStorage.getItem('smegUser'));

  if (userLocalStorage) {
    const userData = await getUserData(userLocalStorage.id);

    const userFavorites = data.products.filter(product => userData.favorites.includes(product.article));
    userFavorites.map(product => product.select = !product.select);

    const userStock = data.products.filter(product => userData.stock.includes(product.article));

    data = {...data, favorites: userFavorites, stock: userStock};

    store.dispatch(initState(data));
  } else {
    store.dispatch(initState(data));
  }
})();

export default store;
