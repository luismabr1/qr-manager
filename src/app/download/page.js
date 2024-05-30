'use client'
import React from 'react';
import {Qr} from '../components/Qr'
import useGetImage from '../hooks/useGetImage'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../components/Spinner'
const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + "register";

const Download = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const imageUrl = useGetImage();
  
    useEffect(() => {
      if (!router.isReady) return;
  
      if (status === 'loading') {
        setTimeout(() => {
          if (status === 'loading') {
            router.push('/');
          }
        }, 5000);
        return;
      }
  
      if (!session) {
        router.push('/');
      }
    }, [session, status, router.isReady]);
  
    if (status === 'loading' || !session) {
      return (
        <div className="flex items-center justify-center h-screen">
          <Spinner /> {/* Asegúrate de tener un componente Spinner */}
          <p className="ml-4 text-lg">Cargando sesión...</p>
        </div>
      );
    }
    return (
        <>
        <div className="container-grid">
            <div style={{ border: '2px solid white' }}>
                {imageUrl && <Qr url={baseURL+ '/preview'} />}
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

