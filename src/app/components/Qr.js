import React from 'react';
import QRCode from 'react-qr-code'

const Qr = ({url}) => {
    
    return (
        <div >
            <QRCode value={url} />
        </div>
    )
}

export default Qr;