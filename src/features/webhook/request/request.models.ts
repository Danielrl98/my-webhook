import  { prisma } from '../../../shared/config/prisma'

export default class RequestWebhookModels {
    async create(value: string,responseType: string, requestId: string){
        const result = await prisma.data.create({
            data: {
                requestId,
                responseType,
                data: value
            }
        })
        return result
    }
}