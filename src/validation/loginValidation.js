
  import Joi from "joi";

  const loginValidation = Joi.object({
   email:Joi.string().email().regex(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-z]{3}$/).required(), 
   password:Joi.string()
  })

  export default loginValidation;
 