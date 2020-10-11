import BaseService from './BaseService';

import { serviceURLs } from '../utils/ServiceURLs';

export class CustomerBagService extends BaseService {
    
    constructor() {
        super();
    }

    async store(data) {
        if (!localStorage.getItem('Authorization')) {
            return;
        }

        return this.post(serviceURLs.CUSTOMER_BAGS, data);
    }

    async list(query) {
        if (!localStorage.getItem('Authorization')) {
            return;
        }

        return await this.get(serviceURLs.CUSTOMER_BAGS, [], query);
    }

    async update(id, data) {
        if (!localStorage.getItem('Authorization')) {
            return;
        }

        return await this.put(serviceURLs.CUSTOMER_BAGS_ID, data, [id]);
    }

    async destroy(id) {
        if (!localStorage.getItem('Authorization')) {
            return;
        }

        return await this.delete(serviceURLs.CUSTOMER_BAGS_ID, [id]);
    }
}
