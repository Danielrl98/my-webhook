"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../shared/config/prisma");
class RequestWebhookModels {
    async create(value, responseType, requestId, referenceType) {
        const result = await prisma_1.prisma.data.create({
            data: {
                requestId,
                responseType,
                referenceType,
                data: value
            }
        });
        return result;
    }
}
exports.default = RequestWebhookModels;
