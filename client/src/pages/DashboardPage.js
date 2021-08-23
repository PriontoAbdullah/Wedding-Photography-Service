import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = ({ adminLoading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Dashboard adminLoading={adminLoading} />
    </div>
  );
};

export default DashboardPage;
