
   
   import  {Router} from "express";
   import {postLoginValues} from "../controler/loginControler.js";
   const loginRouter = Router()
 
 /**
 * @swagger
 * "/api/v1/auth/login":
 *  post:
 *     tags:
 *     - login
 *     summary: user login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: Alexandre@gmail.com
 *              password:
 *                type: string
 *                default: 1@38Df
 *              
 *     responses:
 *      200:
 *        description: (blog)
 *      404:
 *        description: Please provide all required details
 *      
 */  
   

  loginRouter.post("", postLoginValues)
   
   export default loginRouter
