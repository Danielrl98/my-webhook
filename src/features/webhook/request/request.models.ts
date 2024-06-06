import  { prisma } from '../../../shared/config/prisma'

export default class RequestWebhookModels {
    async create(value: string){
        const result = await prisma.data.create({
            data: {
                data: value
            }
        })
        return result
    }
}