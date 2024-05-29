'use client'
import React from 'react';
import {Qr} from '../components/Qr'
import useGetImage from '../hooks/useGetImage'
import Image from 'next/image'

const Download = () => {
    const imageUrl = useGetImage();
    return (
        <>
        <div className="container-grid">
            <div style={{ border: '2px solid white' }}>
                {imageUrl && <Qr url='/api/preview/' />}
            </div>
            <div style={{ position: 'relative', width: '700px' }}>
                {imageUrl && 
                    <Image
                    src={imageUrl}
                    alt="Imagen pequeña"
                    width={700} // Ajusta esto al ancho deseado
                    height={700} // Ajusta esto a la altura deseada
                    />
                }
            </div>
        </div>
        </>
    );
};

export default Download;

