interface IMessage {
    conversationId: string;
    sender: {
        userId: string;
        name: {
            firstName: string;
            lastName: string;
        };
        email: string;
        profileImage: string;
    };
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

export default IMessage;
