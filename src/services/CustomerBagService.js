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
}
