
  import Joi from '@hapi/joi' 
  
  const signupValidation = Joi.object({
    name:  Joi.string().required(),
    email:  Joi.string().email().regex(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-z]{3}$/).required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@$%&^])[aA-zZ\d!@$%^&]{3,16}$/).required(),
    telephone:  Joi.string().regex(/^(078|079|072|073)[0-9]{7}$/).required(),
    username: Joi.string().regex(/^[aA-zZ]{5,16}[0-9]{1}$/).required()
  })
  

  export const SignupValidation = signupValidation;

  // .regex(/^[aA-zZ ]{5,20}$/)
  // .regex(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-z]{3}$/)
  // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@$%&^])[aA-zZ\d!@$%^&]{3,16}$/)
  // .regex(/^(078|079|072|073)[0-9]{7}$/)
  // .regex(/^[aA-zZ]{5,16}[0-9]{1}$/)
  