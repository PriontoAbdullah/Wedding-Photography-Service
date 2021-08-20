import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
