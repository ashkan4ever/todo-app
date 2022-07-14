import { ITask, PriorityType } from "../types";

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default class Task {
    title: string;
    text: string;
    priority: PriorityType;
    status: "Done" | "Todo";
    gifts?: string;
    id: string;

    constructor(data: ITask) {
        this.title = data.title;
        this.text = data.text;
        this.priority = data.priority;
        this.status = data.status;
        this.gifts = data.gifts;
        this.id = Task.generateString(10);
    }

    get priorityColor() {
        switch (this.priority) {
            case "High":
                return 'red'
            case "Medium":
                return '#fbbc43'
            case "Low":
                return 'green'
                    
            default:
                return 'white'
        }
    };

    static generateString(length: number) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
}
