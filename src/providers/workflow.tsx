"use client";

import React, { PropsWithChildren } from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

export const WorkflowProvider = ({ children }: PropsWithChildren) => {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
};
