import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import GoogleIcon from '../../assets/icons/google.svg'
import { auth } from '../../firebase'
import { useRegisterMutation } from '../../features/auth/authApi'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function ButtonRegistration() {
    const [register, { data, isLoading, error }] = useRegisterMutation()
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider()

    useEffect(() => {
        if (data?.user && data?.accessToken) {
            navigate('/dashboard')
        } else if (error) {
            console.log(error)
        }
    }, [data, error, navigate])

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken

            if (!token) {
                throw new Error('Token not found')
            }

            Cookies.set('accessToken', token)

            const user = result.user

            await register({
                user: {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    _id: user.uid,
                    role: 'user',
                    isActive: true,
                },
                accessToken: token,
            })
        } catch (error) {
            console.error('Google Sign-In Error:', error)
            toast.error('Failed to sign in with Google')
        }
    }

    return (
        <button
            className="mb-0 mt-6 w-full space-y-4 rounded-full p-4 shadow-lg bg-white hover:scale-105 duration-200 transition-all"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
        >
            <div className=" flex items-center justify-center gap-x-4 w-full">
                <img src={GoogleIcon} alt="Google Icon" className="h-6 w-6" />
                <span className="text-lg font-semibold">
                    Continue with Google
                </span>
            </div>
        </button>
    )
}
