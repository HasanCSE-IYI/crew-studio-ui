export enum NODE_TYPES {
  BLOCK = "BLOCK",
  AGENT = "AGENT",
  TASK = "TASK",
  OUTPUT = "OUTPUT",
}

export interface BaseNodeData {
  label: string;
  icon: string;
  type: NODE_TYPES;
}
