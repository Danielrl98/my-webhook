import { ResponseWebhookServices } from "./response.models"

export class RequestWebhookResponse {

    private responseWebhookServices = new ResponseWebhookServices

    constructor(){

    }
    async find(query: any) {
        if(!query.page) throw new Error('page is required')
        if(!query.pageSize) throw new Error('pageSize is required')
        const result = await this.responseWebhookServices.find(query.page, query.pageSize)
        const count = await this.responseWebhookServices.count()

        return {
            result,
            page: parseInt(query.page),
            pageSize: parseInt(query.pageSize),
            count
        }
    }
}