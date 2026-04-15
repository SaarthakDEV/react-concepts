import React from "react";
import store from "./store";
import { cakeActions } from "./features/cake/cakeSlice";
import { icecreamActions } from "./features/icecream/iceCreamSlice";
import Users from "./features/user/Users";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

const ReduxToolkit = () => {
  console.log("Initial State", store.getState());
  const unsubscribe = store.subscribe(() => {
    console.log("Updates State", store.getState());
  });

  store.dispatch(cakeActions.ordered());
  store.dispatch(cakeActions.ordered());
  store.dispatch(cakeActions.ordered());
  store.dispatch(cakeActions.restocked(10));

  //   store.dispatch(icecreamActions.ordered());
  //   store.dispatch(icecreamActions.ordered());
  //   store.dispatch(icecreamActions.ordered());
  //   store.dispatch(icecreamActions.restocked(10));

  unsubscribe();
  //   return <div>ReduxToolkit</div>;
  return (
    <Provider store={store}>
        <ErrorBoundary fallback={<div>Some error has occured</div>}>
      <Users />

        </ErrorBoundary>
    </Provider>
  );
};

export default ReduxToolkit;
