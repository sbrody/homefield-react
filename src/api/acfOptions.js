import axios from 'axios';

const acfOptions =
    axios.create({
        baseURL: 'http://homefield.local/wp-json/acf/v3/options/options',
        param: {

        }
    });


export default acfOptions;