import { ResponseWebhookServices } from "./response.models"

export class RequestWebhookResponse {

    private responseWebhookServices = new ResponseWebhookServices

    constructor(){

    }
    removeDuplicate(array: any) {
        return array.filter((valor:any, indice:any, self:any) => {
            return self.indexOf(valor) === indice;
          })
    }
    async find(query: any) {
        if(!query.page) throw new Error('page is required')
        if(!query.pageSize) throw new Error('pageSize is required')
            
        const result = await this.filterParties(query.page, query.pageSize)

        const count = await this.responseWebhookServices.count()

        return {
            result,
            page: parseInt(query.page),
            pageSize: parseInt(query.pageSize),
            count
        }
    }
    async filterParties(page:any, pageSize: any){
        const result = await this.responseWebhookServices.find(page, pageSize)

        const personType:any = []

        result.map(e => {
            if(JSON.parse(e.data).payload){
                const payload = JSON.parse(e.data).payload

                if(payload.response_data.parties){
                    
                    const parties = payload.response_data.parties

                    for (let index = 0; index < parties.length; index++) {
                       if(parties[index].entity_type){
                            personType.push((parties[index].entity_type))
                       }
                        
                    }        
                }
            }
        })
       
        return this.removeDuplicate(personType) 
       }
       async filterClassifications(page:any, pageSize: any) {

        const result = await this.responseWebhookServices.find(page, pageSize)

        const classificationsresult:any = []

        result.map(e => {
            if(JSON.parse(e.data).payload){
                const payload = JSON.parse(e.data).payload
                
                if(payload.response_data.classifications){
                    
                    const classifications = payload.response_data.classifications
                    
                    for (let index = 0; index < classifications.length; index++) {
                       if(classifications[index].code){
                            classificationsresult.push((classifications[index]))
                       } 
                    }        
                }
            }
        })

        return this.removeDuplicate(classificationsresult)
       }
       async filterSubjects(page:any, pageSize: any) {

        const result = await this.responseWebhookServices.find(page, pageSize)

        const response:any = []

        result.map(e => {
            if(JSON.parse(e.data).payload){
                const payload = JSON.parse(e.data).payload
                
                if(payload.response_data.subjects){
                    
                    const subjects = payload.response_data.subjects
                    
                    for (let index = 0; index < subjects.length; index++) {
                       if(subjects[index].code){
                            response.push((subjects[index].code))
                       } 
                    }        
                }
            }
        })

        return this.removeDuplicate(response)
    }
    async filterCourts(page:any, pageSize: any) {

        const result = await this.responseWebhookServices.find(page, pageSize)

        const response:any = []

        result.map(e => {
            if(JSON.parse(e.data).payload){
                const payload = JSON.parse(e.data).payload
                
                if(payload.response_data.courts){
                    
                    const res = payload.response_data.courts
                    
                    for (let index = 0; index < res.length; index++) {
                       if(res[index].name){
                        response.push((res[index].name))
                       } 
                    }        
                }
            }
        })

        return this.removeDuplicate(response)
    }
    async filterSteps(page:any, pageSize: any) {

        const result = await this.responseWebhookServices.find(page, pageSize)

        const response:any = []

        result.map(e => {
            if(JSON.parse(e.data).payload){
                const payload = JSON.parse(e.data).payload
                
                if(payload.response_data.steps){
                    
                    const res = payload.response_data.steps
                    
                    for (let index = 0; index < res.length; index++) {
                       if(res[index].content){

                        let content = res[index].content

                        if(content.includes('-') == true){

                            content = content.split('-')
                            content = content[1]
                        }
                        response.push(content.trim())
                    }        
                }
            }
            }
        })

        return this.removeDuplicate(response)
    }
    async filterPhase(page:any, pageSize: any) {

        const result = await this.responseWebhookServices.find(page, pageSize)

        const response:any = []

        result.map(e => {
            if(JSON.parse(e.data).payload){
                const payload = JSON.parse(e.data).payload
                
                    if(payload.response_data.situation){
                    
                    const res = payload.response_data.situation

                    response.push(res)
                }
            }
        })

        return this.removeDuplicate(response)
    }
}