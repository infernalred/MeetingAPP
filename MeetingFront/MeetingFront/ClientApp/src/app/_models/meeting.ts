import { Room } from "./room";
import { User } from "./user";
import { Attender } from "./attender";

export interface Meeting {
    id: number;
    title: string;
    date: Date;
    timeStart: Date;
    timeEnd: Date;
    room: Room;
    user: User;
    resourceId: number;
    attenders: Attender[];
}
