import {legacy_createStore, combineReducers} from "redux";

import {reducer as Auth_Reducer} from './Auth_Reducer/reducer.jsx'


const rootReducer = combineReducers({
  Auth: Auth_Reducer,
})

// Create GlobalContext

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const GlobalInfo = legacy_createStore(rootReducer,  composeEnhancers);

export default GlobalInfo;