import axios from 'axios';
import baseUrl from './baseUrl';

const posts = axios.create({
    baseURL: `${baseUrl}/wp-json/wp/v2/posts`,
    params: {

    }
});

export default posts;