import { ResponseWebhookServices } from "./response.services"

export class RequestWebhookResponse {

    private responseWebhookServices = new ResponseWebhookServices

    constructor(){

    }
    async find() {
        const result = await this.responseWebhookServices.find()

        return result
    }
}