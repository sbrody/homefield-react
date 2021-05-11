import axios from 'axios';
import baseUrl from './baseUrl';

const pages = axios.create({
    baseURL: `${baseUrl}/wp-json/wp/v2/pages`,
    params: {

    }
});

export default pages;