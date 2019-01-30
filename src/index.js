import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { saveState } from "./localStorage";
import store from "./helpers/store";
import App from "./App";

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
