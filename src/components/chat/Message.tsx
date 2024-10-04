interface IMessageProps {
    justify: string;
    message: string;
    createdAt: Date;
}

export default function Message({
    justify,
    message,
    createdAt,
}: IMessageProps) {
    const currentTime = new Date(createdAt).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div
            className={`text-gray-500 flex justify-${justify} w-full max-w-[200px] ${
                justify === 'end' && 'ml-[88px]'
            }`}
        >
            <div className="flex flex-col">
                <span className="bg-green-500 px-6 py-2 rounded-2xl font-semibold text-white shadow text-sm">
                    {message}
                </span>
                <span
                    className={`text-xs text-gray-400 mt-1 ${
                        justify === 'end' ? 'text-right' : 'text-start'
                    }`}
                >
                    {currentTime}
                </span>
            </div>
        </div>
    );
}
