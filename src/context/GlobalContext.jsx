import React, {createContext, useState, useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../libs/firebase'

export const globalContext = createContext();

export default function GlobalContext({children}) {

    const getData = async (collectionName) => {
        const col = collection(database, collectionName)
        const querySnapshot = await getDocs(col)
        const data = []
    
        querySnapshot.forEach(doc => {
            data.push(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )
        })
        return data
    }

    let onMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return (onMobile.Android() || onMobile.BlackBerry() || onMobile.iOS() || onMobile.Opera() || onMobile.Windows())
        }
    }

    const [personalProjects, setPersonalProjects] = useState([])
    const [certificates, setCertificates] = useState([])
    const [mobileView] = useState(onMobile.any() !== null)

    useEffect(() => {
        getData('projects')
        .then(data => setPersonalProjects(data.reverse()))
        .catch(error => console.log(error))

        getData('certificates')
        .then(data => setCertificates(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <globalContext.Provider value={{
            personalProjects,
            certificates,
            mobileView
        }}>
            {children}
        </globalContext.Provider>
    )
}
