import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import AddService from "./AdminPannel/AddService";
import AllOrders from "./AdminPannel/AllOrders";
import MakeAdmin from "./AdminPannel/MakeAdmin";
import DashboardLoader from "./DashboardLoader";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BookService from "./UserPannel/BookService";
import ContactUs from "./UserPannel/ContactUs";
import MyOrder from "./UserPannel/MyOrder";
import Profile from "./Welcome/Profile";

const Dashboard = ({ adminLoading }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { isAdmin } = useContext(UserContext);

  const { panel } = useParams();
  const history = useHistory();

  // User Pannel
  if (
    !adminLoading &&
    !isAdmin &&
    (panel === "allOrders" || panel === "addService")
  ) {
    history.replace({ pathname: "/dashboard/profile" });
  }
  // Admin Pannel
  if (
    !adminLoading &&
    isAdmin &&
    (panel === "bookService" || panel === "myOrder" || panel === "contact")
  ) {
    history.replace({ pathname: "/dashboard/profile" });
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard Content */}
            {adminLoading ? (
              <DashboardLoader />
            ) : panel === "profile" ? (
              <Profile />
            ) : panel === "allOrders" && isAdmin ? (
              // Admin Pannel
              <AllOrders />
            ) : panel === "addService" && isAdmin ? (
              <AddService />
            ) : panel === "makeAdmin" && isAdmin ? (
              <MakeAdmin />
            ) : // User Pannel
            panel === "bookService" ? (
              <BookService />
            ) : panel === "myOrder" ? (
              <MyOrder />
            ) : panel === "contact" ? (
              <ContactUs />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
