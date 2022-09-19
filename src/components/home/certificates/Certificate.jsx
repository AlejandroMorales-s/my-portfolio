import { useState, useContext } from 'react'
import { globalContext } from '../../../context/GlobalContext'
import CertificateOverlay from './CertificateOverlay'

export default function Certificate({cert}) {
    const [showingCertificate, setShowingCertificate] = useState(false)
    const [certificateToShow, setCertificateToShow] = useState()

    const {certificates} = useContext(globalContext)

    const {name, image} = cert.data

    const showCertificate = () => {
        const certificateToShow = certificates.find(certificate => certificate.id === cert.id)
        setCertificateToShow(certificateToShow)
        setShowingCertificate(true)
    }
    return (
        <>
            <div onClick={showCertificate} className='certificate-card'>
                <div className='certificate-img-container'>
                    <img src={image} alt={name} />
                </div>
                <p>{name}</p>
            </div>  
            {showingCertificate && <CertificateOverlay certificate={certificateToShow} setShowing={setShowingCertificate}/>}
        </>
    )
}
