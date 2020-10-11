import BaseService from './BaseService';

import { serviceURLs } from '../utils/ServiceURLs';

export class CustomerBagService extends BaseService {
    
    constructor() {
        super();
    }

    async store(data) {
        return this.post(serviceURLs.CUSTOMER_BAGS, data);
    }

    async list(query) {
        return await this.get(serviceURLs.CUSTOMER_BAGS, [], query);
    }

    async update(id, data) {
        return await this.put(serviceURLs.CUSTOMER_BAGS_ID, data, [id]);
    }

    async destroy(id) {
        return await this.delete(serviceURLs.CUSTOMER_BAGS_ID, [id]);
    }
}
