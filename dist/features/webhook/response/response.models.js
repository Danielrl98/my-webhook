"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseWebhookServices = void 0;
const prisma_1 = require("../../../shared/config/prisma");
class ResponseWebhookServices {
    async find(page, pageSize) {
        const result = await prisma_1.prisma.data.findMany({
            skip: (parseInt(page) - 1) * parseInt(pageSize),
            take: parseInt(pageSize)
        });
        return result;
    }
    async count() {
        const result = await prisma_1.prisma.data.count();
        return result;
    }
}
exports.ResponseWebhookServices = ResponseWebhookServices;
