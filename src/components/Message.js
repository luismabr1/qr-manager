import React from 'react';
import Link from 'next/link'


export const Message = ({ urlImage }) => {
    return (
        <>
            {
                urlImage && 
                <span className='url-cloudinary-sumbit'>
                    Imagen subida exitosamente! ✅ 
                                        <Link target='_blank' href='/download'> Ver QR</Link>
                                        
                </span>
            }
        </>
    )
}