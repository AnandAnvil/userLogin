import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

class App extends React.Component {
  state = {
    isLog: false,
  };

  handleLogin = (isLog) => this.setState({ isLog });
  render() {
    const { isLog } = this.state;
    return (
      <div>
        <Switch>
          {!isLog ? (
            <Route
              exact
              path="/"
              render={() => <Login isLogin={this.handleLogin} />}
            />
          ) : (
            <Route
              path="/"
              render={() => <Home handleLogged={this.handleLogin} />}
            />
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
