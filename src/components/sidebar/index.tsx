"use client";

import React, { DragEvent, useCallback } from "react";

import { BaseNodeData, NODE_TYPES } from "@/types";
import { Icon } from "..";
import { usePathname } from "next/navigation";

export const NODES = [
  {
    label: "Agent",
    type: "AGENT",
    icon: "user-check",
  },
  {
    label: "Task",
    type: "TASK",
    icon: "clipboard",
  },
  {
    label: "Output",
    type: "OUTPUT",
    icon: "file-output",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  const onDragStart = useCallback(
    (event: DragEvent<HTMLDivElement>, data: BaseNodeData) => {
      event.dataTransfer.setData(`application/reactflow/label`, data.label);
      event.dataTransfer.setData(`application/reactflow/type`, data.type);
      event.dataTransfer.setData(`application/reactflow/icon`, data.icon);
      event.dataTransfer.effectAllowed = "move";
    },
    []
  );

  return (
    <aside className="h-[calc(100vh-57px)] w-64 bg-gray-50 text-gray-900 p-4 border-r">
      <nav className="space-y-3">
        <div
          key="default"
          className="flex items-center py-2 px-3 transition-colors duration-200 rounded bg-gray-700 text-white border cursor-pointer"
        >
          <Icon name="workflow" className="w-5 h-5 mr-3" />
          <span>Create New Workflow</span>
        </div>
        {pathname !== "/workflow" &&
          NODES.map((node) => (
            <div
              key={node.type}
              className="flex items-center py-2 px-3 transition-colors duration-200 rounded bg-white border cursor-grab"
              draggable
              onDragStart={(event) =>
                onDragStart(event, {
                  label: node.label,
                  icon: node.icon,
                  type: node.type as NODE_TYPES,
                })
              }
            >
              <Icon name={node.icon as any} className="w-5 h-5 mr-3" />
              <span>{node.label}</span>
            </div>
          ))}
      </nav>
    </aside>
  );
};

export * from "./right.sidebar";
