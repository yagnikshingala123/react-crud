import { createStore } from "redux"
import handleUsers from "./redux/reducer";

const store = createStore(handleUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store