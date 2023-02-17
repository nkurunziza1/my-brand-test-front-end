  
  import { Router } from "express"
  const signupRouter = Router()
  import { getSignupValue, getSignupValues, postSignupValues} from "../controler/signupControler.js"
  import { SignupValidation } from "../validation/signupValidation.js"
  import validate from "../validationMiddleware/validate.js"


  /**
 * @swagger
 * "/api/v1/users":
 *  get:
 *     tags:
 *     - signup
 *     summary: users credentials
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *              - username
 *              - name
 *              - telephone
 *            properties:
 *              email:
 *                type: string
 *                default: Alexandre@gmail.com
 *              password:
 *                type: string
 *                default: 1@38Df
 *              username:
 *                type: string
 *                default: nkurunziza1
 *              name:
 *                type: string
 *                default: Nkurunziza Alexandre
 *              telephone: 
 *                type: string
 *                default: 0783186898
 *            
 *     responses:
 *      200:
 *        description: (users)
 */
  signupRouter.get("", getSignupValues)
  /**
 * @swagger
 * "/api/v1/users":
 *  post:
 *     tags:
 *     - signup
 *     summary: user registration
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName
 *              - email
 *              - password
 *            properties:
 *              userName:
 *                type: string
 *                default: Nkurunziza
 *              email:
 *                type: string
 *                default: Alexandre@gmail.com
 *              password:
 *                type: string
 *                default: 1Qw@
 *              name:  
 *                type: string
 *                default: Nkurunziza Alexandre
 *              telephone: 
 *                type: string
 *                default: 0783186898  
 *           
 *     responses:
 *      200:
 *        description: User registered Successfully
 *      401:
 *        description: You already have an account. Please login!
 *      409:
 *        description: Email already taken. Please use another email."    
 */
  signupRouter.post("/",validate(SignupValidation), postSignupValues)



  
//  /**
//  * @swagger
//  * /api/v1/users/{id}:
//  *   get:
//  *     tags:
//  *       - signup
//  *     summary: Get a single user by ID
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         description: ID of the users to get
//  *         required: true
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: OK
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 name:
//  *                   type: string
//  *                   description: Nkurunziza Alexandre
//  *                 email:
//  *                   type: string
//  *                   description: Alexendre.Nkurunziza@gmail.com
//  *                 username:
//  *                   type: string
//  *                   default: nkurunziza1
//  *                telephone:
//  *                   type: string
//  *                   default: 0783186898
//  *       404:
//  *         description: User doesn't exit
//  */


/**
 * @swagger
 * "/api/v1/users/{id}":
 *  get:
 *     tags:
 *     - signup
 *     summary: get single user Id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user 
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *              - username
 *              - name
 *              - telephone
 *            properties:
 *              email:
 *                type: string
 *                default: Alexandre@gmail.com
 *              password:
 *                type: string
 *                default: 1@38Df
 *              username:
 *                type: string
 *                default: nkurunziza1
 *              name:
 *                type: string
 *                default: Nkurunziza Alexandre
 *              telephone: 
 *                type: string
 *                default: 0783186898
 *            
 *     responses:
 *      200:
 *        description: (users)
 *      400:
 *        description: user doesn't exist
 */

  signupRouter.get("/:id", getSignupValue)


  export default signupRouter;
