import axios from 'axios';

const siteSettings = axios.get('http://homefield.local/wp-json/genesis-sample/v1/settings')
    .then((res) => {
        return res.data.custom_logo
    })


export default siteSettings;


