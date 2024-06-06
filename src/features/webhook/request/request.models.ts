import  { prisma } from '../../../shared/config/prisma'

export default class RequestWebhookModels {
    async create(value: string,responseType: string, requestId: string,referenceType: string){
        const result = await prisma.data.create({
            data: {
                requestId,
                responseType,
                referenceType,
                data: value
            }
        })
        return result
    }
}