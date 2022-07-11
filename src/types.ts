export interface ITask {
    title: string;
    text: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Done' | 'Todo';
    gifts?: string;
}

export interface IStore {
    todos: ITask[];
}