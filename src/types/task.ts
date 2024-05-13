export interface Task {
  description: string;
  expected_output: string;
  agents: string[];
  llm?: string;
  id?: string;
}
