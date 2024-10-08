import { Link } from 'react-router-dom'
import { useEffect } from 'react'

interface Sender {
    userId: string
    name: {
        firstName: string
        lastName: string
    }
    email: string
    profileImage: string
}

interface MessageProps {
    conversationId: string
    createdAt: Date
    content: string
    sender: Sender
}

export default function Message({
    conversationId,
    createdAt,
    content,
    sender,
}: MessageProps) {
    const currentTime = new Date(createdAt).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })
    useEffect(() => {}, [])

    console.log(conversationId)

    return (
        <li>
            <Link
                to={`/dashboard/inbox/${sender.userId}`}
                className="flex items-center rounded-lg px-4 py-2 text-sm font-medium space-x-4 bg-gray-100 hover:bg-gray-200 duration-200 transition-all"
            >
                <img
                    src={sender.profileImage}
                    alt={sender.profileImage}
                    className="h-8 w-8 rounded-full ring ring-green-500"
                />
                <div>
                    <h3 className="text-md">
                        {sender.name.firstName} {sender.name.lastName}
                    </h3>
                    <p className="text-sm text-gray-500 space-x-2">
                        <span>{content}</span> <span>{currentTime}</span>
                    </p>
                </div>
            </Link>
        </li>
    )
}
