import { User } from "./user";

export class UserModel implements User {
    id: string;
    name: string;
    email: string;

    constructor(userId: string, userName: string, userEmail: string) {

        this.id = userId;
        this.name = userName;
        this.email = userEmail;

    }
}


