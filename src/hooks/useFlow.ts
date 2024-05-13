import { BlockNode } from "@/components";
import { NODE_TYPES } from "@/types";
import { nanoid } from "nanoid";
import { DragEvent, useCallback, useMemo, useRef } from "react";
import {
  Connection,
  Edge,
  MarkerType,
  Node,
  addEdge,
  getConnectedEdges,
  useReactFlow,
} from "reactflow";

export const useFlow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const { setNodes, setEdges, project, getNode, getEdges } = useReactFlow();

  const nodeTypes = useMemo(
    () => ({
      [NODE_TYPES.BLOCK]: BlockNode,
    }),
    []
  );

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const reactFlowBounds: any =
        reactFlowWrapper?.current?.getBoundingClientRect();

      const type = event.dataTransfer.getData("application/reactflow/type");
      const label = event.dataTransfer.getData("application/reactflow/label");
      const icon = event.dataTransfer.getData("application/reactflow/icon");

      if (typeof type === "undefined") {
        return;
      }

      const position = project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      if (!position) return;

      const newNode = {
        id: nanoid(),
        type: NODE_TYPES.BLOCK,
        position,
        data: { label, icon, type },
      };

      setNodes((nds: Node[]) => nds.concat(newNode));
    },
    [project, setNodes]
  );

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onConnect = useCallback(
    (params: Connection) => {
      if (params.source === params.target) return;

      if (!params.source || !params.target) return;

      const prevNode: any = getNode(params.source);
      const getConnectedEdge = getConnectedEdges([prevNode], getEdges());

      const addNewEdge: Edge = {
        id: nanoid(),
        source: params.source,
        target: params.target,
        style: { stroke: "black", strokeWidth: "1.3" },
        labelBgBorderRadius: 4,
        markerEnd: { type: MarkerType.ArrowClosed, color: "black" },
      };

      // if (prevNode?.type === NodeType.CONDITION) {
      //   if (params.sourceHandle === "a") {
      //     Object.assign(addNewEdge, {
      //       data: { label: "Yes" },
      //     });
      //   } else {
      //     Object.assign(addNewEdge, {
      //       data: { label: "No" },
      //     });
      //   }

      //   const existingYesNoEdges = getConnectedEdge.filter(
      //     (el) => el?.label === "Yes" || el?.label === "No"
      //   );

      //   if (existingYesNoEdges.length === 2) return;
      // } else if (prevNode?.type === NodeType.AB_TEST) {
      //   if (params.sourceHandle === "a") {
      //     Object.assign(addNewEdge, {
      //       data: { label: "A" },
      //     });
      //   } else {
      //     Object.assign(addNewEdge, {
      //       data: { label: "B" },
      //     });
      //   }

      //   const existingYesNoEdges = getConnectedEdge.filter(
      //     (el) => el?.label === "A" || el?.label === "B"
      //   );

      //   if (existingYesNoEdges.length === 2) return;
      // }

      setEdges((eds: Edge[]) => addEdge({ ...addNewEdge, ...params }, eds));
    },
    [getEdges, getNode, setEdges]
  );

  return {
    reactFlowWrapper,
    nodeTypes,
    onConnect,
    onDragOver,
    onDrop,
  };
};
