import axios from 'axios';

const navBar = axios.create({
    baseURL: 'http://homefield.local/wp-json/wp/v2/menu',
    params: {

    }
});

export default navBar;