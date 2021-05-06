import axios from 'axios';

const posts = axios.create({
    baseURL: 'http://homefield.local/wp-json/wp/v2/posts',
    params: {

    }
});

export default posts;