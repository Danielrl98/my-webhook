"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_models_1 = __importDefault(require("./request.models"));
class requestrWebhookController {
    constructor() {
        this.requestWebhookModels = new request_models_1.default();
    }
    async create(value) {
        let responseType = '';
        let requestId = '';
        let referenceType = '';
        if (value.payload) {
            if (value.payload.response_type) {
                responseType = value.payload.response_type;
            }
            if (value.payload.request_id) {
                requestId = value.payload.request_id;
            }
        }
        if (value.reference_type) {
            referenceType = value.reference_type;
        }
        const result = await this.requestWebhookModels.create(JSON.stringify(value), responseType, requestId, referenceType);
        return result;
    }
}
exports.default = requestrWebhookController;
