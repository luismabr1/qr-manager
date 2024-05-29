import React from 'react';
import QRCode from 'react-qr-code'

export const Qr = ({url}) => {
    
    return (
        <div >
            <QRCode value={url} />
        </div>
    )
}

