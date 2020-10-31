import BaseService from './BaseService';

import { serviceURLs } from '../utils/ServiceURLs';

export class WishlistService extends BaseService {

    constructor() {
        super();
    }

    async store(data) {
        return await this.post(serviceURLs.WISHLISTS, data);
    }

    async destroy(query) {
        return await this.delete(serviceURLs.WISHLISTS_PRODUCTS_ID, [], query);
    }

}
