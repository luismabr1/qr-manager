/* import { useRouter } from 'next/navigation'; */
import dbConnect from "@/db/config/dbConnect";
import Image from "@/db/models/image";


dbConnect();

export async function GET(request) {
    console.log('llego a api/getImage', request.url);
    const url = new URL(request.url);
    const imageId = url.searchParams.get('id');  

    let image;

    // Si se proporcionó un id, busca la imagen correspondiente
    if (imageId) {
        image = await Image.findOne({ id: imageId });
      }
      
    // Si no se proporcionó un id, o si no se encontró ninguna imagen con el id proporcionado,
    // busca la última imagen ingresada
    if (!image) {
        image = await Image.findOne().sort({ _id: -1 });
    }

    // Si aún así no se encontró ninguna imagen, devuelve un mensaje de error 404
    if (!image) {
        return new Response(null, {
          status: 404,
          statusText: 'Image not found',
        });
      }

    let data = JSON.stringify(image);
/*  console.log('Image ', image);
    console.log('DATA IMAGE', data) */
    
    return new Response(data, {
        status: 200,
    });  
}


