import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./containers/PrivateRoute";
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";
import { Header, HomePage, Info, NotFound, Calendar } from "./views";
import ContextWrapper from "./context/ContextWrapper";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route path="/info" component={Info} />
          <ContextWrapper>
            <PrivateRoute path="/calendar" component={Calendar} />
          </ContextWrapper>
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
