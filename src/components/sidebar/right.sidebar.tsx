"use client";

import React from "react";
import { UserCheck, Clipboard } from "lucide-react";
import { useNodeStore } from "@/store";
import { NODE_TYPES } from "@/types";

export const RightSidebar = () => {
  const { drawerOpen, setDrawerOpen, selectedNode } = useNodeStore();

  if (!drawerOpen) return null;

  return (
    <aside className="h-[calc(100vh-57px)] w-full max-w-sm bg-white text-gray-300 p-5 border-l flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-center text-gray-900">
          {selectedNode?.data?.label}
        </h3>
        <div className="space-y-5">
          {selectedNode?.data?.type === NODE_TYPES.AGENT ? (
            <React.Fragment>
              <div className="space-y-2">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-900"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500     "
                  placeholder="Enter role here"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="goal"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Goal
                </label>
                <input
                  type="text"
                  id="goal"
                  className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500     "
                  placeholder="Enter goal here"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="backstory"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Backstory
                </label>
                <input
                  type="text"
                  id="backstory"
                  className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500     "
                  placeholder="Enter backstory here"
                />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500     "
                  placeholder="Enter description here"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="expected_output"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Expected Output
                </label>
                <input
                  type="text"
                  id="expected_output"
                  className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500     "
                  placeholder="Enter expected output"
                />
              </div>
            </React.Fragment>
          )}
          <div className="space-y-2">
            <label
              htmlFor="llm"
              className="block text-sm font-medium text-gray-900 "
            >
              LLM
            </label>
            <select
              id="llm"
              className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500     "
            >
              <option value="">LLama 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 justify-end">
        <button
          className="bg-gray-50 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded border"
          onClick={() => setDrawerOpen(false)}
        >
          Close
        </button>
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </aside>
  );
};
