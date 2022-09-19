import {AiOutlineClose} from 'react-icons/ai'

export default function CertificateOverlay({certificate, setShowing}) {
    const {image, name} = certificate.data
    return (
        <div className='certificate-overlay'>
            <div className='certificate-overlay-container'>
                <div className='certificate-overlay-img-container'>
                    <img src={image} alt={name} />
                </div>
                <button className='certificate-overlay-button' onClick={() => setShowing(false)}><AiOutlineClose className='certificate-overlay-button-icon'/></button>
            </div>
        </div>
    )
}
