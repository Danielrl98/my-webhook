import { prisma } from "../../../shared/config/prisma";

export class ResponseWebhookServices {
    async find(){
        const result = await prisma.data.findMany()

        return result
    }
}