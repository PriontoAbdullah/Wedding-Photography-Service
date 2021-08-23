import axios from "axios";
import React, {
  createContext,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { getDecodedUser } from "./components/Authentication/LoginManager";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import LoadingSpinner from "./components/Home/LoadingSpinner/LoadingSpinner";

// Rapped with lazy loading
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/ServicePage"));
const Dashboard = lazy(() => import("./pages/DashboardPage.js"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Error = lazy(() => import("./components/Home/Error/Error.js"));

// Create User Context
export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState([]);
  const [adminLoading, setAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check Admin User
  useEffect(() => {
    axios
      .get(
        `https://wedding-photography-71.herokuapp.com/isAdmin?email=${loggedInUser?.email}`
      )
      .then((res) => {
        setIsAdmin(res.data);
        setAdminLoading(false);
      })
      .catch((error) => toast.error(error.message));
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
            {/* Private Route */}
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
