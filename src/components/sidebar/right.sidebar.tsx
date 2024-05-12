"use client";

import React from "react";
import { UserCheck, Clipboard } from "lucide-react";

export const RightSidebar = () => {
  return (
    <aside className="h-[calc(100vh-57px)] w-full max-w-sm bg-white text-gray-300 p-5 border-l flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-center text-gray-900">
          AGENT
        </h3>
        <div className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter role here"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="goal"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Goal
            </label>
            <input
              type="text"
              id="goal"
              className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter goal here"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="backstory"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Backstory
            </label>
            <input
              type="text"
              id="backstory"
              className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter backstory here"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="llm"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              LLM
            </label>
            <select
              id="llm"
              className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">LLama 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 justify-end">
        <button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </aside>
  );
};
