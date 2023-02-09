   
   import Joi from 'joi' 

   const validationBlogSchema = Joi.object({

	title:	Joi.string().required(),
	content: Joi.string().required(),
   summary: Joi.string().required(),
   // image: Joi.string()
   })

   export const ValidationBlogSchema = validationBlogSchema;
