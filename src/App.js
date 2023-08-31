import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Lazy-loaded components
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./screens/Dashboard/Dashboard"));
const Settings = lazy(() => import("./screens/Settings/Settings"));
const AllEvents = lazy(() => import("./screens/AllEvents/AllEvents"));
const NewEvent = lazy(() => import("./screens/NewEvent/NewEvent"));
const EditProfile = lazy(() => import("./screens/EditProfile/EditProfile"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
