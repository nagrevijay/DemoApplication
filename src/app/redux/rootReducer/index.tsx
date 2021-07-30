import { combineReducers,createStore,applyMiddleware } from 'redux';
import counter from '../logInReducer';

const rootReducer = combineReducers({
  counter,
});

// const configureStore = () = {

//   return createStore(rootReducer)
// };
// const store = createStore(counter, applyMiddleware());

  
const store= createStore(rootReducer,applyMiddleware())
export default store;














































































