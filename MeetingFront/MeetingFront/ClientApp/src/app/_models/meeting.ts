import { Room } from "./room";
import { User } from "./user";
import { Attender } from "./attender";

export interface Meeting {
    id: number;
    title: string;
    date: Date;
    timeStart: Date;
    timeEnd: Date;
    roomId: number;
    room: Room;
    userId: string;
    user: User;
    username: string;
    resourceId: number;
    attenders: Attender[];
}
