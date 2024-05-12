import { Header, RightSidebar, Sidebar } from "@/components";
import { WorkflowProvider } from "@/providers";
import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <WorkflowProvider>
      <Header />
      <main className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
        <RightSidebar />
      </main>
    </WorkflowProvider>
  );
};

export default DashboardLayout;
