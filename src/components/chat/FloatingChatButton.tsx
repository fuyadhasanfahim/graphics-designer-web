import chatImage from '../../assets/img/chatImage.png'

interface FloatingChatButtonProps {
    toggleChat: () => void
}

export default function FloatingChatButton({
    toggleChat,
}: FloatingChatButtonProps) {
    return (
        <button
            className="fixed bottom-4 right-4 bg-green-200 hover:bg-green-300 duration-150 transition-all ease-in text-white rounded-full p-4 shadow-lg z-50"
            onClick={toggleChat}
        >
            <img src={chatImage} alt={chatImage} className="w-6 md:w-10" />
        </button>
    )
}
