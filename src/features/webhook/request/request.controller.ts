import RequestWebhookModels from './request.models'


interface RequestProps {
    payload: {
        response_type: string
    }
}
export default class requestrWebhookController {

    private requestWebhookModels = new RequestWebhookModels()

    async create(value: RequestProps){
        let responseType: any = ''
        
        if(value.payload) {
            if(value.payload.response_type){
                responseType = value.payload.response_type
            }
        }
        const result = await this.requestWebhookModels.create(JSON.stringify(value),responseType)

        return result
    }
}