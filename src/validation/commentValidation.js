   
   
  import Joi from 'joi' 

  const CommentValidation = Joi.object({
    // blog: Joi.string().required(),
    name: Joi.string().required(),
    comment: Joi.string().required() 

   })

   export default CommentValidation
   
  