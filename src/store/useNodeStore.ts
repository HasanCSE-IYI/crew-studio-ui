import { Node } from "reactflow";
import { create } from "zustand";

interface NodeStore {
  drawerOpen: boolean;
  setDrawerOpen: (state: boolean) => void;
  selectedNode: Node | null;
  setSelectedNode: (node: Node | null) => void;
}

export const useNodeStore = create<NodeStore>((set) => ({
  selectedNode: null,
  drawerOpen: false,
  setSelectedNode: (node) => set(() => ({ selectedNode: node })),
  setDrawerOpen: (state) => set(() => ({ drawerOpen: state })),
}));
