import { Room } from "./room";
import { User } from "./user";
import { Attender } from "./attender";

export interface Meeting {
    id: number;
    title: string;
    date: Date;
    startTime: Date;
    endTime: Date;
    room: Room;
    user: User;
    resourceId: number;
    attenders: Attender[];
}