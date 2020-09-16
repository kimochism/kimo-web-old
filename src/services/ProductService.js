import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class ProductService extends BaseService {

    constructor() {
        super();
    }

    async list() {
        return await this.get(serviceURLs.PRODUCTS, {});
    }

}