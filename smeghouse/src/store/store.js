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
    userStock.map(product => product.inStock = !product.inStock);

    data = {...data, favorites: userFavorites, stock: userStock, isLogin: true, user: {id: userData.id, userName: userData.userName, password: userData.password, favorites: userData.favorites, stock: userData.stock}};
    store.dispatch(initState(data));
  } else {
    store.dispatch(initState(data));
  }
})();

export default store;
