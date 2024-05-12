"use client";

import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

export const BlockNode = (props: NodeProps) => {
  return (
    <React.Fragment>
      <Handle id="target_top" type="target" position={Position.Top} />
      <Handle id="target_left" type="target" position={Position.Left} />
      <Handle id="source_bottom" type="source" position={Position.Bottom} />
      <Handle id="source_right" type="source" position={Position.Right} />
      <div>BlockNode</div>
    </React.Fragment>
  );
};
