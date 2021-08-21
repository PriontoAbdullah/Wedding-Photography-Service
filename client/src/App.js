import React, {
  createContext,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { getDecodedUser } from "./components/Authentication/LoginManager";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import LoadingSpinner from "./components/Home/LoadingSpinner/LoadingSpinner";

// rapped with lazy loading
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/ServicePage"));
const Dashboard = lazy(() => import("./pages/DashboardPage.js"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Error = lazy(() => import("./components/Home/Error/Error.js"));

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState([]);
  const [adminLoading, setAdminLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (loggedInUser?.email === "test@test.com") {
      setIsAdmin(loggedInUser);
      setAdminLoading(true);
    }
  }, [loggedInUser?.email]);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        isAdmin,
        selectedService,
        setSelectedService,
      }}
    >
      {/* Toast Notification */}
      <Router>
        <Toaster />

        {/* Loading Animation */}
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
            <PrivateRoute exact path="/dashboard/:panel">
              <Dashboard adminLoading={adminLoading} />
            </PrivateRoute>
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
