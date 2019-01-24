import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { getTurns } from "./actions";

import DashboardContainer from "./components/dashboard/DashboardContainer.js";
import Header from "./components/Header";

import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends React.Component {
  componentDidMount() {
    store.dispatch(getTurns());
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <DashboardContainer />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
