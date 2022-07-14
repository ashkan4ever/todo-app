import Task from "./models/task";
export type PriorityType = "High" | "Medium" | "Low";

export interface ITask {
  title: string;
  text: string;
  priority: PriorityType;
  status: "Done" | "Todo";
  gifts?: string;
  id: string;
  priorityColor?: string;
}

export interface IStore {
  todos: ITask[];
}
