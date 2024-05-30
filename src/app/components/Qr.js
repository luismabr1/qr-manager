import React from 'react';
import {QRCode} from 'react-qrcode-logo'

export const Qr = ({url}) => {
    
    return (
        <div >
            <QRCode value={url} 
                qrStyle="square"    // type of qr code, wether you want dotted ones or the square ones
                eyeRadius={10}    // radius of the promocode eye
            />
        </div>
    )
}

