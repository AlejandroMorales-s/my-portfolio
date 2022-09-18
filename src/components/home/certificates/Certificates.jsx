import React from 'react'
import { useContext } from 'react'
import { globalContext } from '../../../context/GlobalContext'
import Certificate from './Certificate'

export default function Certificates() {
    const {certificates} = useContext(globalContext)
    return (
        <div id='certificates' className='certificates container'>
            <h2 className='h2'>Certificates</h2>
            <div className='certificates-container'>
                {certificates?.map(certificate => {
                    return <Certificate key={certificate.id} cert={certificate}/>
                })}
            </div>
        </div>
    )
}
