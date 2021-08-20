import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./components/Home/LoadingSpinner/LoadingSpinner";

// rapped with lazy loading
const Home = lazy(() => import("./pages/Home"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Error = lazy(() => import("./components/Home/Error/Error.js"));

const App = () => {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Authentication />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
