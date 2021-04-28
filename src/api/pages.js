import axios from 'axios';

const pages = axios.create({
    baseURL: 'http://homefield.local/wp-json/wp/v2/pages',
    params: {

    }
});

export default pages;