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
        const result = await this.requestWebhookModels.create(value);
        return result;
    }
}
exports.default = requestrWebhookController;
