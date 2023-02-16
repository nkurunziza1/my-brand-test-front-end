
  // import loginValidation from "../validation/loginValidation.js"

  // const loginValidationMiddleware = (req, res, next) => {
  // const result = loginValidation.validate(req.body);
  //   if (result.error) {
  //     return res.status(404).send({
  //       error: result.error.details[0].message
  //     });
  //   }
  //   next();
  // };

 
  const validate = (items) => (req, res, next) => {
    const { error } = items.validate(req.body);
    if (error) {
      res.status(405).json({ message: error.details[0].message });
    } else {
      next();
    }
  };
  
  export default validate;