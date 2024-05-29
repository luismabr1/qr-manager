/* import dbConnect from "@/db/config/dbConnect";
import Image from "@/db/models/image";

dbConnect(); */

/* export async function GET(request) {
    console.log('REQUEST ID', request.url);
    const url = new URL(request.url);
    const id = url.searchParams.get('id'); 
    console.log('REQUEST ID getted', id); 

    // Busca la imagen en la base de datos usando el ID
     const image = await Image.findOne({id});

    if (!image) {
        const latestDocument = await Image.findOne().sort({ _id: -1 });
            let data = JSON.stringify(latestDocument);
            console.log('Image ', latestDocument);
            console.log('DATA IMAGE', data)
            return new Response(data, {
                status: 200,
            });

        if(!latestDocument){
            return new Response(null, {
                status: 404,
                message: 'Image not found',
            });
        }
    }

    let data = JSON.stringify(image);
    console.log('Image ', image);
    console.log('DATA IMAGE', data)
    
    return new Response(data, {
        status: 200,
    });  
} */

import dbConnect from "@/db/config/dbConnect";
import Image from "@/db/models/image";

dbConnect();

export async function GET(request) {
    console.log('REQUEST ID', request.url);
    const url = new URL(request.url);
    const id = url.searchParams.get('id'); 
    console.log('REQUEST ID getted', id); 

    let image;

    // Si se proporcionó un id, busca la imagen correspondiente
    if (id) {
        image = await Image.findOne({ id });
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
            message: 'Image not found',
        });
    }

    let data = JSON.stringify(image);
    console.log('Image ', image);
    console.log('DATA IMAGE', data)
    
    return new Response(data, {
        status: 200,
    });  
}


