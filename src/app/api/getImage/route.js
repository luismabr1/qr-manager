import dbConnect from "@/db/config/dbConnect";
import Image from "@/db/models/image";

dbConnect();

export async function GET(request) {
    console.log('REQUEST ID', request.url);
    const url = new URL(request.url);
     const id = url.searchParams.get('id'); 
     console.log('REQUEST ID getted', id); 

    // Busca la imagen en la base de datos usando el ID
     const image = await Image.findOne({id});
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


