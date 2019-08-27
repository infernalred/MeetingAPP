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
    userId: string;
    username: string;
    resourceId: number;
    attenders: Attender[];
}
