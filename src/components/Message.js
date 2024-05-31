import React from 'react';


export const Message = ({ urlImage }) => {
    return (
        <>
            {
                urlImage && <span className='url-cloudinary-sumbit'>
                    Your Image uploaded successfully! ✅ 
                                        <a target='_blank' href='/qr'> View Image</a>
                                        <button>Ver QR</button>
                </span>
            }
        </>
    )
}