import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from "./reducers";
import { getTurnsIfNeeded } from "./actions";
import { saveState } from "./localStorage";
import Auth from "./Auth/Auth";

import DashboardContainer from "./components/dashboard/DashboardContainer.js";
import Header from "./components/Header";

import "./index.css";

const auth = new Auth();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  saveState(store.getState());
});

class App extends React.Component {
  componentDidMount() {
    store.dispatch(getTurnsIfNeeded());
    const { isAuthenticated } = auth;
    console.log("here", isAuthenticated);
    if (!isAuthenticated()) auth.login();
  }

  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>
          <Route path="/" component={DashboardContainer} />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
