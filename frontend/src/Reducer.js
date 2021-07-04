import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history)
  });

export default createRootReducer;

/*Pretty boiler plate stuff. Specifies how the state is changed in response to actions.*/
