"use client";

import { BaseNodeData } from "@/types";
import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { Icon } from "../icon";

export const BlockNode = ({ data }: NodeProps<BaseNodeData>) => {
  return (
    <React.Fragment>
      <Handle id="target_top" type="target" position={Position.Top} />
      {/* <Handle id="target_left" type="target" position={Position.Left} /> */}
      <Handle id="source_bottom" type="source" position={Position.Bottom} />
      {/* <Handle id="source_right" type="source" position={Position.Right} /> */}
      <div className="bg-white max-w-xs w-full border-2 border-gray-200 py-3 px-4 flex space-x-3">
        <div className="size-8 grid place-content-center bg-gray-200">
          <Icon name={data.icon as any} className="w-6 h-6" />
        </div>
        <h3 className="font-semibold">{data.label}</h3>
      </div>
    </React.Fragment>
  );
};
