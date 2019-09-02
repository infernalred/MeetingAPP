import { Meeting } from "./meeting";

export class MeetingModel implements Meeting {
    id: number;    
    title: string;
    date: Date;
    timeStart: Date;
    timeEnd: Date;
    roomId: number;
    room: import("./room").Room;
    userId: string;
    user: import("./user").User;
    username: string;
    resourceId: number;
    attenders: import("./attender").Attender[];

    constructor(meetingTitle: string) {
        this.title = meetingTitle;
    }

}
