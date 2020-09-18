import axios from 'axios'
import { enviroment } from '../enviroment/enviroment';

export default class BaseService {

    constructor() {
        this.http = axios.create({
            baseURL: enviroment.api,
            headers: {
                // 'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    async get(url, query) {
        
        const buildedUrl = this.buildUrl(url, query);

        const response = await this.http.get(buildedUrl);
        return response.data;
    }

    async post(url, data) {
        const buildedUrl = this.buildUrl(url);

        const response = await this.http.post(buildedUrl, data);

        return response.data;
    }

    buildUrl(url, query) {
        console.log(query); 
        return `${url}`;
    }

}