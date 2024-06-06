"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWebhookResponse = void 0;
const response_models_1 = require("./response.models");
class RequestWebhookResponse {
    constructor() {
        this.responseWebhookServices = new response_models_1.ResponseWebhookServices;
    }
    async find(query) {
        if (!query.page)
            throw new Error('page is required');
        if (!query.pageSize)
            throw new Error('pageSize is required');
        const result = await this.responseWebhookServices.find(query.page, query.pageSize);
        const count = await this.responseWebhookServices.count();
        return {
            result,
            page: parseInt(query.page),
            pageSize: parseInt(query.pageSize),
            count
        };
    }
}
exports.RequestWebhookResponse = RequestWebhookResponse;
