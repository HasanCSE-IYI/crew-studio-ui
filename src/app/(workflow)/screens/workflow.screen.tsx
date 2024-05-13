"use client";

import { useFlow } from "@/hooks";
import { useNodeStore } from "@/store";

import React from "react";
import ReactFlow, { Background, Controls, MiniMap, Node } from "reactflow";

export const WorkflowScreen = () => {
  const { nodeTypes, reactFlowWrapper, onConnect, onDragOver, onDrop } =
    useFlow();
  const { setSelectedNode, setDrawerOpen } = useNodeStore();

  const onNodeClick = (_event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setDrawerOpen(true);
  };

  return (
    <div ref={reactFlowWrapper} className="w-full h-[calc(100vh-57px)]">
      <ReactFlow
        defaultNodes={[]}
        defaultEdges={[]}
        defaultEdgeOptions={{ animated: true }}
        {...{
          nodeTypes,
          onConnect,
          onDragOver,
          onDrop,
          onNodeClick,
        }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};
