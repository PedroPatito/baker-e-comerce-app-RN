import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import ProductReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
});

// con el createStore creamos el almacenamiento donde vamos a almacenar el store, con los reducers le decimos que estados queremos almacenar, en este caso categories y products.
export default createStore(RootReducer);
