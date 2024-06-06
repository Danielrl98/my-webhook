interface CustomProcessEnv {
    HOSTNAME: string;
    TESTE: string
   
  }
  
  declare global {
    namespace NodeJS {
      interface ProcessEnv extends CustomProcessEnv {}
    }
  }
  
  declare global {
    var env: CustomProcessEnv;
  }
  
const env = process.env;
  
export default env;