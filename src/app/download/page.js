'use client'
import React, { useMemo, useRef } from 'react';
import { Qr } from '../../components/Qr';
import useGetImageId from '../../hooks/useGetImageId';
import useGetImage from '../../hooks/useGetImage';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Spinner from '../../components/Spinner';

const Download = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // El usuario no está autenticado, maneja esto aquí.
      router.push('/');
    },
  });

  const router = useRouter();
  const imageId = useGetImageId();
  const imageUrl = useGetImage();
  const baseURL = process.env.NEXTAUTH_URL + 'preview/' + imageId;
  const qrRef = useRef(null);

  const downloadCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'QR-manager.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

   const memoizedQr = useMemo(() => {
    return <Qr url={baseURL} />
  }, [imageId]); 

  if (status === 'loading' || imageId===null || imageUrl===null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
        <p className="ml-4 text-lg">Cargando sesión...</p>
      </div>
    );
  }

  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col justify-center md:order-1">
          <div ref={qrRef} className="border-1 border-white self-center">
            {memoizedQr}
          </div>
          <button
            className="bg-black text-white py-4 px-8 no-underline inline-block text-lg my-1 mx-0.5 cursor-pointer self-center"
            onClick={downloadCode}
          >
            Descargar código
          </button>
        </div>

        <div className="relative w-full md:w-700 md:order-2">
          {imageId && (
            <Image src={imageUrl} alt="Imagen pequeña" width={700} height={700} />
          )}
        </div>
      </div>
    </>
  );
};

export default Download;


