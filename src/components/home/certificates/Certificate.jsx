import React from 'react'

export default function Certificate({cert}) {
    const {name, image} = cert.data
    return (
        <div className='certificate-card'>
            <div className='certificate-img-container'>
                <img src={image} alt={name} />
            </div>
            <p>{name}</p>
        </div>  
    )
}
