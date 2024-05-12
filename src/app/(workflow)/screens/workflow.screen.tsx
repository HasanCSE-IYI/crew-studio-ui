"use client";

import { useFlow } from "@/hooks";
import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";

export const WorkflowScreen = () => {
  const { nodeTypes, reactFlowWrapper, onConnect, onDragOver, onDrop } =
    useFlow();
  return (
    <div ref={reactFlowWrapper} className="w-full h-[calc(100vh-57px)]">
      <ReactFlow
        {...{
          nodeTypes,
          onConnect,
          onDragOver,
          onDrop,
        }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};
