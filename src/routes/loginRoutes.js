
   
   import  {Router} from "express";
   import {postLoginValues} from "../controler/loginControler.js";
   const loginRouter = Router()
  
   loginRouter.post("", postLoginValues)
   
   export default loginRouter
