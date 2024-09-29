import { Types } from 'mongoose'

interface IUser extends Document {
    _id: Types.ObjectId
    name: {
        firstName: string
        lastName: string
    }
    username: string
    email: string
    phone: string
    password: string
    profileImage: string
    isDeleted: boolean
}

export default IUser
