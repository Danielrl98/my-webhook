import RequestWebhookModels from './request.models'


interface RequestProps {
    payload: {
        response_type: string,
        request_id: string
    }
}
export default class requestrWebhookController {

    private requestWebhookModels = new RequestWebhookModels()

    async create(value: RequestProps){
        let responseType: any = ''
        let requestId: any =   ''
        if(value.payload) {
            if(value.payload.response_type){
                responseType = value.payload.response_type
            }
            if(value.payload.request_id){
                requestId = value.payload.request_id
            }
        }
        const result = await this.requestWebhookModels.create(JSON.stringify(value),responseType,requestId)

        return result
    }
}