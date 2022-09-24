import { useContext } from 'react'
import Certificate from '../components/home/certificates/Certificate'
import { globalContext } from '../context/GlobalContext'

export default function Certificates() {
    const {certificates} = useContext(globalContext)
    return (
        <div className='certificates-page container'>
            <h2 className='h2'>Certificates</h2>
            <div className='certificates-page-container'>
                {certificates?.map(certificate => {
                    return <Certificate key={certificate.id} cert={certificate}/>
                })}
            </div>
        </div>
    )
}
