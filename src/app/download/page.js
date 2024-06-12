'use client'
import React from 'react';
import {Qr} from '../../components/Qr'
import useGetImageId from '../../hooks/useGetImageId'
import useGetImage from '../../hooks/useGetImage'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '../../components/Spinner'


const Download = () => {
    const { data: session, status } = useSession({    
        required: true,
        onUnauthenticated() {
          // The user is not authenticated, handle it here.
          router.push('/');
        },});
    
    const router = useRouter();
    const imageId = useGetImageId();
    const imageUrl = useGetImage()
    console.log('se supone que tiene que mandar el id de la imagen', imageId);
    const baseURL = process.env.NEXTAUTH_URL + "preview/" + imageId ;
    const qrRef = useRef(null);

    const downloadCode = () => {
        const canvas = qrRef.current.querySelector("canvas");
        if (canvas) {
          const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          let downloadLink = document.createElement("a");
          downloadLink.href = pngUrl;
          downloadLink.download = "your_name.png";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
    }
  
    if (status === 'loading') {
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
                            {imageId && <Qr url={baseURL} />}
                        </div>
                        <button className='bg-black text-white py-4 px-8 no-underline inline-block text-lg my-1 mx-0.5 cursor-pointer self-center' onClick={() => downloadCode()}>
                            Download Code
                        </button>
                    </div>
            
                    <div className="relative w-full md:w-700 md:order-2">
                        {imageId && 
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
        )
        
}

export default Download;

