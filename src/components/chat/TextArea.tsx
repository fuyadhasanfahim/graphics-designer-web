import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { IUser } from '../../hooks/user.interface'
import { useDispatch } from 'react-redux'
import { setMessages } from '../../features/message/messageApi'

export default function TextArea() {
    const dispatch = useDispatch<AppDispatch>()
    const { user } = useSelector((state: RootState) => state.auth)
    const { _id, name, email, profileImage } = user as IUser

    const recipientId = 'fuyadistheadmin'
    const conversationId = [_id, recipientId].sort().join('-').toString()

    const [text, setText] = useState('')

    const sender = {
        userId: _id,
        name,
        email,
        profileImage,
    }

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        if (text.trim() === '') return

        const data = {
            conversationId,
            sender,
            message: text,
        }

        dispatch(setMessages(data))

        setText('')
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e as unknown as { preventDefault: () => void })
        }
    }

    return (
        <form
            action=""
            onSubmit={handleSubmit}
            className="flex gap-x-2 items-center p-4 border-t"
        >
            <textarea
                placeholder="Type a message..."
                className="w-full rounded-lg focus:ring-2 ring-green-500 p-1 pe-12 text-sm shadow-sm bg-transparent border overflow-y-auto scrollbar-none outline-none"
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={handleKeyPress}
            ></textarea>
            <button
                type="submit"
                className="bg-green-500 rounded-full p-2 text-white shadow-md"
            >
                <PaperAirplaneIcon className="h-6 w-6 font-bold" />
            </button>
        </form>
    )
}
