import React from "react";
import { UserCheck, Clipboard } from "lucide-react";

export const NODES = [
  {
    label: "Agent",
    type: "AGENT",
    Icon: UserCheck,
  },
  {
    label: "Task",
    type: "TASK",
    Icon: Clipboard,
  },
];

export const Sidebar = () => {
  return (
    <aside className="h-[calc(100vh-57px)] w-64 bg-gray-50 text-gray-900 p-4 border-r">
      <nav>
        {NODES.map((node) => (
          <div
            className="flex items-center p-2 my-2 transition-colors duration-200 rounded hover:bg-gray-700 cursor-pointer"
            key={node.type}
          >
            <node.Icon className="w-5 h-5 mr-3" />
            <span>{node.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export * from "./right.sidebar";
