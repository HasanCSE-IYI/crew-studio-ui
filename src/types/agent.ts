export interface Agent {
  role: string;
  goals: string;
  backstory: string;
  llm?: string;
  id?: string;
}
