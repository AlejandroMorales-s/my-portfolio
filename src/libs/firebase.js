import {initializeApp, getApps, getApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"

let app 
if(!getApps.length){
    app= initializeApp({
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        appId: import.meta.env.VITE_APP_ID,
    })
} else {
    app = getApp()
}

export const database = getFirestore(app)