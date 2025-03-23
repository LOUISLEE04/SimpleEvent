import axios from 'axios';
//had to use npm install axios to do that

const api = axios.create({
    baseURL : '/api',
});

//apparently cant declare as URL as other files have interface url too
const eventlink = "Will add later";

//async can promise await and get the data, the type of return is Promise
//the = async() let ts know will fetch stuff from API and allow the use of await
export const getEventList = async(): Promise<any> => {
    const { data  } = await api.get(eventlink);
    return data;
};

