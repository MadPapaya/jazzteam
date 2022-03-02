import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./containers/PrivateRoute";
import LoginContainer from "./containers/LoginContainer";
import LinkBtn from "./components/LinkBtn";
// import Home from './components/Home'
import ProfileContainer from "./containers/ProfileContainer";
// import NewsContainer from './containers/NewsContainer'
// import NotFound from './components/NotFound'
import { Header, HomePage, Info, NotFound, Calendar } from "./views";
import "./App.scss";

// const App = () => (
//     <div>
//       <header className="header">
//         <div className="top-menu">
//           <LinkBtn to="/" label={'Главная'} />
//           <LinkBtn to="/profile" label={'Профиль'} />
//           <LinkBtn to="/news" label={'Новости'} />
//           <LinkBtn to="/abra-kadabra" label={'404'} />
//           <LinkBtn to="/login" label={'Логин'} />
//           <div></div>
//         </div>
//       </header>

//       <hr />
//       <div className="content">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/news" component={NewsContainer} />
//           <Route path="/login" component={LoginContainer} />
//           <PrivateRoute path="/profile" component={ProfileContainer} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </div>
// )

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
          <PrivateRoute path="/calendar" component={Calendar} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
