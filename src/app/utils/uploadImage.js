
/* const router = useRouter(); */
import axios from 'axios';

    const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + "uploadImage";

    export const uploadImage = async (data) => {
/*         console.log("Uploading image", data) */
        
        const requestBody = {
            id: data.public_id,
            url: data.secure_url,
            name: 'image'
        }

        await axios
            .post(baseURL, requestBody)
            .then(function (res) {
/*                 console.log(res); */
            })
            .catch(function (error) {
                alert('Something went wrong...');
            });

    };