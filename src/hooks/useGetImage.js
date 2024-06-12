// useLatestImage.js
import { useEffect, useState } from 'react'

export default function useGetImage(id) {
  const [imageUrl, setImageUrl] = useState(null);
  console.log(id)

  useEffect(() => {
    // Función para obtener la última imagen de la base de datos
    async function fetchImage() {
      try {
        if(id){
          const response = await fetch(`/api/getImage?id=${id}`); // Utiliza el parámetro 'id'
          const data = await response.json();
          setImageUrl(data.url);
        }else{
          const response = await fetch(`/api/getImage`); // No utiliza el parámetro 'id'
          const data = await response.json();
          console.log('Entro a fetch sin id', data)
          setImageUrl(data.url);
        }
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
      }
    }
    

    // Llama a la función cuando el componente se monta
    fetchImage();
  }, []);

  return imageUrl;
}

