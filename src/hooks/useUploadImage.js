import {useEffect, useState} from 'react';
import { fileUpload } from "../utils/fileUpload.js";

export const useUploadImage = () => {

   
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [urlImage, setUrlImage] = useState('')

  const handleChange = (imageList) => setImages(imageList);
    const onUpload = async () => {
      setLoading(true);
       const formData = new FormData()
       formData.append('image', images[0].dataURL)
       formData.append('ok', true)
       /* puedes poner a continuacion data para capturar toda la meta data de la imagen y poder modificarla */
       const url = await fileUpload(images[0].dataURL); 

      setLoading(false);
      if (url){
        setUrlImage(url);
      } 
      else alert('Error, please try again later. ❌')

      setImages([]);
    }
  
    useEffect(() => {
      let timeout;
      if(urlImage){
        timeout = setTimeout(()=> {
          setUrlImage('')
        }, 5000)
      }
    
      return () => {
       clearTimeout(timeout);
      }
    }, [urlImage])



    return {
        loading,
        onUpload,
        handleChange,
        urlImage,
        images
    }
}
