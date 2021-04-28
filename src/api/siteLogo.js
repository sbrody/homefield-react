
import axios from 'axios';
import siteSettings from './siteSettings';

console.log(siteSettings);

const siteLogo = axios.create({
    baseURL: `http://homefield.local/wp-json/wp/v2/media/10`,
    params: {
        data: 'custom_logo'
    }
}, siteSettings)



export default siteLogo;



