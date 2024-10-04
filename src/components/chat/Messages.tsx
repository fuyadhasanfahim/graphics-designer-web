import Message from './Message';
import { AppDispatch, RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { IUser } from '../../hooks/user.interface';
import { useDispatch } from 'react-redux';
import { getMessages } from '../../features/message/messageApi';
import IMessage from '../../hooks/message.Interface';

export default function Messages() {
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.auth);
    const { _id } = user as IUser;

    const recipientId = 'fuyadistheadmin';
    const conversationId = [_id, recipientId].sort().join('-').toString();

    const { messages } = useSelector((state: RootState) => state.messages);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch(getMessages(conversationId));
    }, [conversationId, dispatch]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-none">
            {messages.map((message, index) => {
                const { sender, createdAt, message: msg } = message as IMessage;

                return (
                    <Message
                        key={index}
                        justify={sender?.userId === _id ? 'end' : 'start'}
                        message={msg}
                        createdAt={createdAt}
                    />
                );
            })}

            <div ref={messagesEndRef} />
        </div>
    );
}
