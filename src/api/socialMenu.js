import axios from 'axios';

const socialMenu = axios.create({
    baseURL: 'http://homefield.local/wp-json/wp/v2/social-menu',
    params: {

    }
});

export default socialMenu;