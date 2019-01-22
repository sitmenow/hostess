import React from "react";
import ReactDOM from "react-dom";

// May need
import DashboardContainer from "./components/dashboard/DashboardContainer.js";
import Header from "./components/Header";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DashboardContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
