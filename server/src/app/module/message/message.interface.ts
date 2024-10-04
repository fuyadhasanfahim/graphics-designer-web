export interface IUserMessage {
    userId: string
    name: {
        firstName: string
        lastName: string
    }
    email: string
    profileImage: string
}

export interface IMessage {
    conversationId: string
    sender: IUserMessage
    message: string
}
