import React, {createContext, useState, useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../libs/firebase'

export const globalContext = createContext();

export default function GlobalContext({children}) {
    const [personalProjects, setPersonalProjects] = useState([]);

    const getProjects = async () => {
        const col = collection(database, "projects")
        const querySnapshot = await getDocs(col)
        const projects = []
    
        querySnapshot.forEach(doc => {
            projects.push(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )
        })
        setPersonalProjects(projects)
    }
    useEffect(() => {
        getProjects()
    }, [])

    return (
        <globalContext.Provider value={{
            personalProjects
        }}>
            {children}
        </globalContext.Provider>
    )
}
