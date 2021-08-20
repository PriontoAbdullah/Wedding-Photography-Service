import { createContext, lazy, Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./components/Home/LoadingSpinner/LoadingSpinner";

// rapped with lazy loading
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/ServicePage"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Error = lazy(() => import("./components/Home/Error/Error.js"));

export const UserContext = createContext();

const App = () => {
  const [selectedService, setSelectedService] = useState([]);

  return (
    <UserContext.Provider
      value={{
        selectedService,
        setSelectedService,
      }}
    >
      <Router>
        <Toaster />
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/services/:id">
              <Services />
            </Route>
            <Route exact path="/login">
              <Authentication />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
