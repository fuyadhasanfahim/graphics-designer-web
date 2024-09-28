export interface IUser {
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
    isDeleted: boolean;
}
