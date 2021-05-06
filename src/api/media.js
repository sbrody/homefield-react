import axios from 'axios';

const media = axios.create({
    baseURL: 'http://homefield.local/wp-json/wp/v2/media',
    params: {

    }
});

export default media;