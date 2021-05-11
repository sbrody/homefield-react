import axios from 'axios';
import baseUrl from './baseUrl';

const media = axios.create({
    baseURL: `${baseUrl}/wp-json/wp/v2/media`,
    params: {

    }
});

export default media;