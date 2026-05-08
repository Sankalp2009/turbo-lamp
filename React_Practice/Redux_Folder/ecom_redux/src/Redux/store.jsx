import {legacy_createStore,combineReducers} from "redux";
import {reducer as Product_Reducer} from "./Product_Reducer/reducer.jsx";
import {reducer as Auth_Reducer} from "./Auth_Reducer/reducer.jsx";
import {reducer as Cart_Reducer} from "./Cart_Reducer/reducer.jsx";

// State Persist

// step1: Load_data from localStorage
const LoadState = ()=>{
  try {
    const Load_Arr = JSON.parse(localStorage.getItem("authState"))
    return Load_Arr;
  } catch (error) {
    console.error(error)
    return undefined
  }
  }

// Step2: Save data to localStorage
const saveData = async(state)=>{

  try {
    localStorage.setItem("authState", JSON.stringify(state))
  } catch (error) {
    console.error(error)
    return undefined
  }
}


const PersistAuth = LoadState()  || {};
// const Persist_Cart = LoadState() || {};

console.log(PersistAuth);

// create Global context
const rootReducer = combineReducers({
  Product: Product_Reducer,
  Auth: Auth_Reducer,
  Cart:Cart_Reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const GlobalInfo = legacy_createStore(rootReducer,PersistAuth,composeEnhancers);


export default GlobalInfo;

// Subscribe to globalInfo
  GlobalInfo.subscribe(() => {
  saveData({ 
    Auth: GlobalInfo.getState().Auth,
    Cart: GlobalInfo.getState().Cart
   }); // persist only Auth slice
});