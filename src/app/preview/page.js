'use client'
import Image from 'next/image'
import useGetImage from '../hooks/useGetImage'

export default function FullScreenImage() {
  const imageUrl = useGetImage();

  // Si todavía no se ha obtenido la URL de la imagen, no renderiza el componente Image
  if (!imageUrl) {
    return null;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '250vh' }}>
      <Image
        src={imageUrl}
        alt="Imagen en pantalla completa"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}



