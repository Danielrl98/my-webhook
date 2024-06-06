import RequestWebhookModels from './request.models'

export default class requestrWebhookController {

    private requestWebhookModels = new RequestWebhookModels()

    async create(value: string){
        const result = await this.requestWebhookModels.create(value)

        return result
    }
}