import React from 'react'
import { useContext } from 'react'
import { globalContext } from '../../../context/GlobalContext'
import { Link } from 'react-router-dom'
import Certificate from './Certificate'

export default function Certificates() {
    const {certificates} = useContext(globalContext)
    const {mobileView} = useContext(globalContext)

    const certificatesMobile = []
    
    for (let index = 0; index < 3; index++) {
        certificatesMobile.push(certificates[index])
    }
    return (
        <div id='certificates' className='certificates container'>
            <h2 className='h2'>Certificates</h2>
            <div className='certificates-container'>
                {mobileView ? 
                    certificatesMobile?.map(certificate => {
                        return certificate !== undefined && <Certificate key={certificate.id} cert={certificate}/>
                    })
                :
                    certificates?.map(certificate => {
                        return <Certificate key={certificate.id} cert={certificate}/>
                    })
                }
            </div>
            <Link className='certificates-button' to={'/certificates'}>
                <button>See all</button>
            </Link>
        </div>
    )
}
