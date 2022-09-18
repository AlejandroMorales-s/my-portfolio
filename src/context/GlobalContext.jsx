import React, {createContext, useState, useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../libs/firebase'

export const globalContext = createContext();

export default function GlobalContext({children}) {
    const [personalProjects, setPersonalProjects] = useState([]);
    const [certificates, setCertificates] = useState([]);

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

    useEffect(() => {
        getData('projects')
        .then(data => setPersonalProjects(data))
        .catch(error => console.log(error))

        getData('certificates')
        .then(data => setCertificates(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <globalContext.Provider value={{
            personalProjects,
            certificates
        }}>
            {children}
        </globalContext.Provider>
    )
}
