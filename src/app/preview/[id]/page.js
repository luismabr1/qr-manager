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
          layout="responsive"
          width={300} // Añade un ancho
          height={300} // Añade una altura
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    )
}



