'use client'
import Image from 'next/image'
import useGetImage from '../../hooks/useGetImage'


export default function FullScreenImage() {
  const imageUrl = /* `useGetImage` is a custom hook being used in the FullScreenImage component. It is
  responsible for fetching the URL of an image to be displayed in the component.
  The hook likely handles the logic for fetching the image URL asynchronously and
  returning it to the component once it is available. */
  useGetImage()

  // Si todavía no se ha obtenido la URL de la imagen, no renderiza el componente Image
  if (!imageUrl) {
    return null;
  }

  return (
    <div className="max-w-sm w-full md:max-w-full lg:flex">
      <Image
        src={imageUrl}
        alt="Imagen en pantalla completa"
        layout='responsive'
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}

      />
    </div>
  )
}