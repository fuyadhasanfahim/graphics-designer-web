import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import IUser from './user.interface'

const userSchema = new Schema<IUser>(
    {
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        name: {
            firstName: { type: String },
            lastName: { type: String },
        },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String },
        password: { type: String },
        profileImage: {
            type: String,
            default: 'https://i.ibb.co.com/7nxJWyv/download.png',
        },
        role: {
            type: String,
            enum: ['SuperAdmin', 'Admin', 'User'],
            default: 'User',
        },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})

const UserModel = mongoose.model<IUser>('User', userSchema)
export default UserModel
