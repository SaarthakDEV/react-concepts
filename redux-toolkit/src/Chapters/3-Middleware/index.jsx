import React, { useEffect } from "react";
import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
} from "redux";
import { createLogger } from "redux-logger";

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const logger = createLogger();

const orderCake = () => ({
  type: CAKE_ORDERED,
  quantity: 1,
});

const orderIceCream = (quantity) => ({
  type: ICECREAM_ORDERED,
  payload: quantity,
});

const restockCake = (quantity) => ({
  type: CAKE_RESTOCKED,
  payload: quantity,
});

const restockIceCream = (quantity) => ({
  type: ICECREAM_RESTOCKED,
  payload: quantity,
});

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 2,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const Middleware = () => {
  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(logger));
  console.log("InitialState", store.getState());

  // const unsubscribe = store.subscribe(() => {
  //   console.log("updated state", store.getState())
  //   });

  //   store.dispatch(orderCake());
  //   store.dispatch(orderCake());
  //   store.dispatch(orderCake());
  //   store.dispatch(restockCake(3));

  const actions = bindActionCreators(
    { orderCake, restockCake, orderIceCream, restockIceCream },
    store.dispatch,
  );
  actions.orderCake();
  actions.orderCake();
  actions.orderCake();
  actions.restockCake(3);
  actions.orderIceCream();
  actions.orderIceCream();
  actions.restockIceCream(10);

  // unsubscribe();
  return <div>Middleware</div>;
};

export default Middleware;
