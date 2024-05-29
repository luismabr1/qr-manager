/* import React from 'react';
import { useEffect, useState } from 'react'

export const useGetImage = () => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
      // Función para obtener la última imagen de la base de datos
      async function fetchImage() {
        const response = await fetch('/api/getImage'); // Reemplaza esto con la ruta a tu API
        const data = await response.json();
        console.log('DATA URL USEGETIMAGE', data);
        setImageUrl(data.url);
      }
  
      // Llama a la función cuando el componente se monta
      fetchImage();
    }, []);
  
    // Si todavía no se ha obtenido la URL de la imagen, no renderiza el componente Image
    if (!imageUrl) {
      return null;
    }
    return {
        imageUrl
    }
}; */

// useLatestImage.js
import { useEffect, useState } from 'react'

export default function useGetImage() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Función para obtener la última imagen de la base de datos
    async function fetchImage() {
      const response = await fetch('/api/getImage'); // Reemplaza esto con la ruta a tu API
      const data = await response.json();
      setImageUrl(data.url);
    }

    // Llama a la función cuando el componente se monta
    fetchImage();
  }, []);

  return imageUrl;
}

