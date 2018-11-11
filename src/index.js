import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import WaitingListContainer from "./components/reservations/WaitingListContainer";
import Header from "./components/Header";

import "./index.css";

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <WaitingListContainer />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
