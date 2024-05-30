import React from 'react';
import {QRCode} from 'react-qrcode-logo'

export const Qr = ({url}) => {
    
    return (
        <div >
            <QRCode value={url} />
        </div>
    )
}

