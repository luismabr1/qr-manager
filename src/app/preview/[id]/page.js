'use client'
import Image from 'next/image'
import useGetImage from '../../../hooks/useGetImage'



export default function FullScreenImage({params}) {
  const imageUrl = useGetImage(params.id)

  // Si todavía no se ha obtenido la URL de la imagen, no renderiza el componente Image
  if (!imageUrl) {
    return null;
  }

  return (
      <div className="max-w-sm w-full md:max-w-full lg:flex">
      <Image
        src={imageUrl}
        alt="Imagen en pantalla completa"
        layout="fixed"
        objectFit="cover"
        width={1000} // Agrega el ancho de la imagen aquí
        height={800} // Agrega la altura de la imagen aquí
      />
      </div>
    )
}



