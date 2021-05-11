import axios from 'axios';
import baseUrl from './baseUrl';

const navBar = axios.create({
    baseURL: `${baseUrl}/wp-json/wp/v2/menu`,
    params: {

    }
});

export default navBar;