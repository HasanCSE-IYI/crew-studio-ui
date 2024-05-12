"use client";

import React, { DragEvent, useCallback } from "react";

import { BaseNodeData, NODE_TYPES } from "@/types";
import { Icon } from "..";

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
];

export const Sidebar = () => {
  const onDragStart = useCallback(
    (event: DragEvent<HTMLDivElement>, data: BaseNodeData) => {
      event.dataTransfer.setData(`application/reactflow/label`, data.label);
      event.dataTransfer.setData(
        `application/reactflow/type`,
        NODE_TYPES.BLOCK
      );
      event.dataTransfer.setData(`application/reactflow/icon`, data.icon);
      event.dataTransfer.effectAllowed = "move";
    },
    []
  );

  return (
    <aside className="h-[calc(100vh-57px)] w-64 bg-gray-50 text-gray-900 p-4 border-r">
      <nav className="space-y-3">
        {NODES.map((node) => (
          <div
            key={node.type}
            className="flex items-center py-2 px-3 transition-colors duration-200 rounded bg-white border cursor-grab"
            draggable
            onDragStart={(event) =>
              onDragStart(event, {
                label: node.label,
                icon: node.icon,
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
