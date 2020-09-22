import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class CategoryService extends BaseService {

    constructor() {
        super();
    }

    async list(query) {
        return await this.get(serviceURLs.CATEGORIES, [], query);
    }

    async listProductsByCategory(id) {
        return await this.get(serviceURLs.CATEGORIES_ID_PRODUCTS, [id]);
    }

}