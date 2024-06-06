"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWebhookResponse = void 0;
const response_services_1 = require("./response.services");
class RequestWebhookResponse {
    constructor() {
        this.responseWebhookServices = new response_services_1.ResponseWebhookServices;
    }
    async find() {
        const result = await this.responseWebhookServices.find();
        return result;
    }
}
exports.RequestWebhookResponse = RequestWebhookResponse;
