import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID f228b0d2ea3c129aff7b50528dffc45c54b23f687ae13ac0568d73d722312f44',
    }
});