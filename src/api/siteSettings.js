import axios from 'axios';
import baseUrl from './baseUrl';

const siteSettings = axios.get(`${baseUrl}/wp-json/genesis-sample/v1/settings`)
    .then((res) => {
        return res.data.custom_logo
    })


export default siteSettings;


