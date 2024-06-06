interface CustomProcessEnv {
    HOSTNAME: string;
   
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