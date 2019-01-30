import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getTurnsIfNeeded } from "./actions";
import PrivateRoute from "./components/PrivateRoute";

import Auth from "./Auth/Auth";

import DashboardContainer from "./components/dashboard/DashboardContainer.js";
import Login from "./components/Login";
import Header from "./components/Header";

import "./index.css";

const auth = new Auth();

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    // const { isAuthenticated } = auth;
    // console.log("here", isAuthenticated);
    // if (!isAuthenticated()) auth.login();
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <PrivateRoute path="/" component={DashboardContainer} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
