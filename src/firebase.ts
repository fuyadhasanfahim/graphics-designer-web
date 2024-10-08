import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

interface firebaseConfigProps {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

const firebaseConfig: firebaseConfigProps = {
    apiKey: 'AIzaSyDUMS3nMr0-HULSReX8d4VCQgGbrb16HHI',
    authDomain: 'graphics-designer-website.firebaseapp.com',
    projectId: 'graphics-designer-website',
    storageBucket: 'graphics-designer-website.appspot.com',
    messagingSenderId: '73519853847',
    appId: '1:73519853847:web:ba6926d09c9ff7a28bc752',
    measurementId: 'G-S1MD7NL39Q',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)

export default app
