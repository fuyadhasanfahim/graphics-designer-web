import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IMessage from '../../../hooks/message.Interface'
import Message from './Message'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import {
    addMessage,
    getAllMessages,
} from '../../../features/message/messageApi'
import { AppDispatch } from '../../../app/store'

interface InboxProps {
    role: string
    messages: IMessage[]
}

export default function Inbox({ role, messages }: InboxProps) {
    const dispatch = useDispatch<AppDispatch>()
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchMessages = async () => {
            await dispatch(getAllMessages())
        }

        fetchMessages()

        const intervalId = setInterval(() => {
            fetchMessages()
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [dispatch])

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5173/dashboard')

        socket.onmessage = event => {
            const newMessage: IMessage = JSON.parse(event.data)
            dispatch(addMessage(newMessage))
        }

        return () => {
            socket.close()
        }
    }, [dispatch])

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    const uniqueMessagesMap = new Map<string, IMessage>()

    messages.forEach(message => {
        const existingMessage = uniqueMessagesMap.get(message.conversationId)

        if (
            !existingMessage ||
            new Date(message.createdAt) > new Date(existingMessage.createdAt)
        ) {
            uniqueMessagesMap.set(message.conversationId, message)
        }
    })

    // Create an array from the unique messages map and sort it
    const uniqueMessages = Array.from(uniqueMessagesMap.values()).sort(
        (a, b) => {
            return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            ) // Latest first
        },
    )

    return (
        <li>
            {role !== 'User' && (
                <details className="group [&_summary::-webkit-details-marker]:hidden h-full max-h-48 overflow-y-auto scrollbar-none">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <span className="text-sm font-medium">
                            Inbox <FontAwesomeIcon icon={faInbox} />
                        </span>
                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <div className="border rounded-lg">
                        <div className="mt-2 flex items-center gap-x-3 px-4">
                            <button className="block rounded-lg px-4 py-2 text-sm font-medium text-white bg-green-500 space-x-2">
                                All
                            </button>
                            <button className="block rounded-lg px-4 py-2 text-sm font-medium text-white bg-green-500 space-x-2">
                                Unread
                            </button>
                        </div>

                        <ul className="mt-2 space-y-1 rounded-lg p-4">
                            {uniqueMessages.map((message, i) => (
                                <Message
                                    key={i}
                                    conversationId={message.conversationId}
                                    createdAt={message.createdAt}
                                    content={message.message}
                                    sender={message.sender}
                                />
                            ))}
                        </ul>
                    </div>
                </details>
            )}
        </li>
    )
}
