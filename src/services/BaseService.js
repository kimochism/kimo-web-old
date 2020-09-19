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

    async get(url, pathParams = [], queries = null) {

        const buildedUrl = this.buildUrl(url, pathParams, queries);

        const response = await this.http.get(buildedUrl);
        return response.data;
    }

    async post(url, data) {
        const buildedUrl = this.buildUrl(url);

        const response = await this.http.post(buildedUrl, data);

        return response.data;
    }

    buildUrl(url, pathParams, queries) {
        const buildedPathParams = this.buildPathParams(url, pathParams);
        const buildedQueries = this.buildQueries(queries);

        const buildedUrl = `${buildedPathParams}${buildedQueries ? '?'.concat(buildedQueries) : ''}`
        return buildedUrl;
    }

    buildQueries(queries) {
        if (!queries) {
            return;
        }

        const keys = Object.keys(queries);

        return keys.map(key => {
            return `${key}=${queries[key]}`
        }).join('&&');
    }

    buildPathParams(url, pathParams) {
        if (!pathParams || !pathParams.length) {
            return url;
        }

        const regex = /\{(.*?)\}/;

        pathParams.forEach(value => {
            const matched = regex.exec(url);
            if (matched) {
                url = url.replace(matched[0], value);
            }
        });

        return url;
    }

}