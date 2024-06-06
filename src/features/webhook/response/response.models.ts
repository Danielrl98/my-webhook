import { prisma } from "../../../shared/config/prisma";

export class ResponseWebhookServices {
    async find(page: any,pageSize:any){
        const result = await prisma.data.findMany({
            skip: (parseInt(page) - 1) * parseInt(pageSize), 
            take: parseInt(pageSize)
        })

        return result
    }
    async count(){
        const result = await prisma.data.count()
        return result
    }
}