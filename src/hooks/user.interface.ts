export interface IUser extends Document {
    _id: string;
    name: {
        firstName: string;
        lastName: string;
    };
    username: string;
    email: string;
    phone: string;
    password: string;
    profileImage: string;
}
