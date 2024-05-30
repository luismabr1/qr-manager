import dbConnect from "@/db/config/dbConnect";
import Image from "@/db/models/image";

dbConnect();
 export async function POST(request) {
/*     console.log(request.body); */
    const { id, name, url } = await request.json();

    const existingImage = await Image.findOne({ id });
    if (existingImage) {
        return new Response(data, {
            message: 'Email is already taken',
            status: 400,
        });
    }

    // Hash the password before storing it in the database
/*     const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Data ', email, '   ', password, '   ', hashedPassword); */

    // If user is created successfully, return a success message
    const image = await Image.create({ id, name, url });

    let data = JSON.stringify(image);
/*     console.log('Image ', image); */
    return new Response(data, {
        status: 200,
    });

} 

