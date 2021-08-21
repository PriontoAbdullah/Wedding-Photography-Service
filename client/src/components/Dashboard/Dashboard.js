import React, { useState } from "react";
import AddService from "./AdminPannel/AddService";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import ContactUs from "./UserPannel/ContactUs";
// import BookService from "./UserPannel/BookService";
// import MyOrder from "./UserPannel/MyOrder";
// import DashboardFooter from "./Welcome/DashboardFooter";
// import Statistics from "./Welcome/Statistics";
// import WelcomeBanner from "./Welcome/WelcomeBanner";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            {/* Dashboard */}
            {/* <WelcomeBanner />
            <Statistics />
            <DashboardFooter /> */}

            {/* User Panel */}
            {/* Book Service */}
            {/* <BookService /> */}
            {/* <MyOrder /> */}
            {/* <ContactUs /> */}

            {/* Admin Panel */}
            <AddService />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
