import RequestWebhookModels from './request.models'


interface RequestProps {
    reference_type: string,
    payload: {
        response_type: string,
        request_id: string,
    }
}
export default class requestrWebhookController {

    private requestWebhookModels = new RequestWebhookModels()

    async create(value: RequestProps){
        let responseType: any = ''
        let requestId: any =   ''
        let referenceType: any = ''

        if(value.payload) {
            if(value.payload.response_type){
                responseType = value.payload.response_type
            }
            if(value.payload.request_id){
                requestId = value.payload.request_id
            }
        }
        if(value.reference_type) {
            referenceType = value.reference_type
        }
        const result = await this.requestWebhookModels.create(
            JSON.stringify(value),
            responseType,
            requestId,
            referenceType
        )

        return result
    }
}