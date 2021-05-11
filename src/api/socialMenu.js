import axios from 'axios';
import baseUrl from './baseUrl';

const socialMenu = axios.create({
    baseURL: `${baseUrl}/wp-json/wp/v2/social-menu`,
    params: {

    }
});

export default socialMenu;