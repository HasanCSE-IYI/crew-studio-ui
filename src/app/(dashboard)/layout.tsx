import { Header, RightSidebar, Sidebar } from "@/components";
import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
        <RightSidebar />
      </main>
    </React.Fragment>
  );
};

export default DashboardLayout;
