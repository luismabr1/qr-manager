
import 'dotenv/config'
import { uploadImage } from './uploadImage'
import { getImage } from './getImage'


const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const preset = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET


export const fileUpload = async (file) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`; 
    const formData = new FormData();
    formData.append('file', file);
    formData.append('cloud_name', cloud_name);
    formData.append('upload_preset', `${preset}`); 
    try {
        const res = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData,
        });

        if (!res.ok) {
            console.error('Error al cargar el archivo a Cloudinary:', res.status);
            const errorData = await res.json();
            console.error('Detalles del error:', errorData);
            return null;
        }

        const data = await res.json();
/*         console.log('URL segura de la imagen:', data.secure_url);
        console.log('otros datos de la imagen', data) */
        uploadImage(data)
        getImage(data.secure_url)
        return data.secure_url;
    } catch (error) {
        console.error('Error en la solicitud de carga:', error);
        return null;
    }
};
 
