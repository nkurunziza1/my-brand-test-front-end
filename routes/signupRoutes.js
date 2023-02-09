  
  import { Router } from "express"
  const signupRouter = Router()
  import { getSignupValue, getSignupValues, postSignupValues} from "../controler/signupControler.js"
  import { SignupValidation } from "../validation/signupValidation.js"
  import validate from "../validationMiddleware/validate.js"

  signupRouter.get("", getSignupValues)
  signupRouter.post("",validate(SignupValidation), postSignupValues)
  signupRouter.get("/:id", getSignupValue)


  export default signupRouter;
