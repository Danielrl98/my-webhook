"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseWebhookServices = void 0;
const prisma_1 = require("../../../shared/config/prisma");
class ResponseWebhookServices {
    async find() {
        const result = await prisma_1.prisma.data.findMany();
        return result;
    }
}
exports.ResponseWebhookServices = ResponseWebhookServices;
