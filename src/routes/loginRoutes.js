
   
   import  {Router} from "express";
   import {postLoginValues} from "../controler/loginControler.js";
   const loginRouter = Router()
   import loginValidation from "../validation/loginValidation.js";
   import validate from "../validationMiddleware/validate.js";

   loginRouter.post("", postLoginValues)
   
   export default loginRouter
