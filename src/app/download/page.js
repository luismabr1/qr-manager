'use client'
import React from 'react';
import {Qr} from '../components/Qr'
import useGetImage from '../hooks/useGetImage'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../components/Spinner'

const Download = () => {
    const imageUrl = useGetImage();
    const { data: session, status } = useSession();
    const router = useRouter();
  
    useEffect(() => {
      // Si el router no está listo, no hacemos nada
      if (!router.isReady) return;
  
      // Si la sesión está cargando, esperamos 5 segundos y luego redirigimos al usuario
      if (status === 'loading') {
        setTimeout(() => {
          if (status === 'loading') {
            router.push('/'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
          }
        }, 5000);
        return;
      }
  
      // Si no hay sesión, redirigimos al usuario a la página de inicio de sesión
      if (!session) {
        router.push('/'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
      }
    }, [session, status, router.isReady]);
  
    // Si la sesión está cargando o no hay sesión, mostramos el spinner
    if (status === 'loading' || !session) {
      setTimeout(() => {
        if (status === 'loading') {
          router.push('/'); // Reemplaza '/login' con la ruta a tu página de inicio de sesión
        }
      }, 5000);
      return <Spinner />; // Puedes reemplazar esto con un componente de carga si lo prefieres
    }
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

