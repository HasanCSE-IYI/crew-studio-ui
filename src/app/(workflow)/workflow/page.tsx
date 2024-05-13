"use client";

import React, { useState } from "react";

const WorkflowPage = () => {
  const [Name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="p-16 max-w-3xl w-full mx-auto space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900 "
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="block w-full py-2 px-4 text-gray-900 border border-gray-300 rounded bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500     "
          placeholder="Enter workflow name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="bg-gray-800 text-white font-semibold py-2 px-3 rounded"
      >
        Create
      </button>
    </div>
  );
};

export default WorkflowPage;
