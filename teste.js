function teste2(){
 return new Promise(async (resolve,reject) => {
    const data = await fetch('httpss://viacep.com.br/ws/01001000/json/').then( async (success) => {
    return await success.json()
    }).catch((err) => {
        reject(err)
    })
    
    if(!data)  reject(data)

    resolve(data)
})
}

(async function teste(){

    try {
        const result = await teste2().then((success) => {
            return success
         }).catch((err) => {
             return false
         })
         if(!result) throw new Error('te')
         console.log({
             result
         })
    } catch (error) {
        console.log(error.message)
    }
  
}())