export interface IUser extends Document {
    role: string
    _id: string
    id: string
    name: {
        firstName: string
        lastName: string
    }
    username: string
    email: string
    phone: string
    password: string
    createdAt: Date
    profileImage: string
}
