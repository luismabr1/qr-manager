import axios from 'axios';

    const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + "getImage";

    export const getImage = async (data) => {
/*         console.log("Getting image", data) */
        
        const requestBody = {
            id: data.id,
        }

        await axios
            .get(baseURL, requestBody)
            .then(function (res) {
/*                 console.log(res); */
            })
            .catch(function (error) {
                alert('Error al traer imagen...');
            });

    };