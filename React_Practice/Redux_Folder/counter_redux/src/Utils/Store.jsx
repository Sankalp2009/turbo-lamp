import { createStore } from 'redux';
import reducer from "../Redux_reducer/reducer.jsx";
const store = createStore(reducer);
export default store;