
  import Joi from '@hapi/joi' 

  const validationSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().regex(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-z]{3}$/).required(),
	message: Joi.string().required()	
  })

  export const ValidationSchema = validationSchema