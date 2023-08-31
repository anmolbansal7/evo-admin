import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./screens/Dashboard/Dashboard";
import Settings from "./screens/Settings/Settings";
import AllEvents from "./screens/AllEvents/AllEvents";
import NewEvent from "./screens/NewEvent/NewEvent";
import EditProfile from "./screens/EditProfile/EditProfile";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={EditProfile} />
        <Route exact path="/all" component={AllEvents} />
        <Route exact path="/new" component={NewEvent} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </HashRouter>
  );
}

export default App;
