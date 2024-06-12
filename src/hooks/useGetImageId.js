// useLatestImage.js
import { useEffect, useState } from 'react'

export default function useGetImage() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Función para obtener la última imagen de la base de datos
    async function fetchImage() {
      try {
        
            const response = await fetch(`/api/getImageId`); // No utiliza el parámetro 'id'
            const data = await response.json();
            console.log('Entro a fetch sin id', data.id)
            setImageUrl(data.id);
        
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
      }
    }
    // Llama a la función cuando el componente se monta
    fetchImage();
  }, []);

  return imageUrl;
}