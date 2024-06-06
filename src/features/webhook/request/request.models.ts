import  { prisma } from '../../../shared/config/prisma'

export default class RequestWebhookModels {
    async create(value: string,responseType: string){
        const result = await prisma.data.create({
            data: {
                responseType: responseType,
                data: value
            }
        })
        return result
    }
}