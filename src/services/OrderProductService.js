import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class OrderProductService extends BaseService {

    constructor() {
        super();
    }

    async store(data) {
        return await this.post(serviceURLs.ORDER_PRODUCTS, data);
    }
}
