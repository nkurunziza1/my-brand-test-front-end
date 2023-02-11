   
 
   import { Router } from "express"
   const messageRouter = Router()
   import { getMessage, postMessage, deleteMessage, getSingleMessage } from "../controler/messageControler.js"
   import { ValidationSchema } from '../validation/messagevalidation.js'
   import validate from "../validationMiddleware/validate.js"
   import passport from "passport"
   messageRouter.get("", getMessage)
   messageRouter.post("" ,validate(ValidationSchema), postMessage)
   messageRouter.get("/:id", getSingleMessage)
   messageRouter.delete("/:id",passport.authenticate('jwt', {session: false}), deleteMessage)
   

   export default messageRouter;


   