import axios from 'axios';
import baseUrl from './baseUrl';

const acfOptions =
    axios.create({
        baseURL: `${baseUrl}/wp-json/acf/v3/options/options`,
        param: {

        }
    });


export default acfOptions;