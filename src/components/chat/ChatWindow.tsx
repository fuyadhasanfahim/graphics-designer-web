import { XMarkIcon } from '@heroicons/react/24/outline'
import Messages from './Messages'
import TextArea from './TextArea'

interface ChatWindowProps {
    toggleChat: () => void
}

export default function ChatWindow({ toggleChat }: ChatWindowProps) {
    return (
        <div className="fixed bottom-20 md:bottom-24 right-4 bg-white w-80 h-96 rounded-xl shadow-lg flex flex-col z-50">
            <div className="flex justify-between items-center p-4 bg-green-500 text-white rounded-t-xl">
                <h2 className="text-lg font-semibold">Live Chat</h2>
                <button
                    onClick={toggleChat}
                    className="bg-green-500 text-white rounded-full"
                >
                    <XMarkIcon className="h-8 w-8 font-bold" />
                </button>
            </div>
            <Messages />
            <div>
                <TextArea />
            </div>
        </div>
    )
}
