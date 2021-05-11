
import axios from 'axios';
import siteSettings from './siteSettings';
import baseUrl from './baseUrl';

console.log(siteSettings);

const siteLogo = axios.create({
    baseURL: `${baseUrl}/wp-json/wp/v2/media/10`,
    params: {
        data: 'custom_logo'
    }
}, siteSettings)


export default siteLogo;



