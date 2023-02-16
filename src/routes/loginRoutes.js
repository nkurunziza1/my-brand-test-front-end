
   
   import  {Router} from "express";
   import {postLoginValues} from "../controler/loginControler.js";
   const loginRouter = Router()
  
//    /**
// *   @swagger:
// *  /api/v1/auth/login:
// *    post:
// *      summary: Login to the application
// *      requestBody:
// *        required: true
// *        content:
// *          application/json:
// *            schema:
// *             type: object
// *             properties:
// *                username:
// *                  type: string
// *               password:
// *                  type: string
// *     responses:
// *        '200':
// *          description: Login successful
// *       '401':
// *         description: Invalid credentials
// */

// */
//  swagger: "2.0"
// info:
//   version: "1.0.0"
//   title: "Login API"
//   description: "API for user login"
// basePath: "/api/v1"
// schemes:
//   - "http"
// consumes:
//   - "application/json"
// produces:
//   - "application/json"
// paths:
//   /auth/login:
//     post:
//       summary: "Login to the application"
//       tags:
//         - "Authentication"
//       requestBody:
//         required: true
//         content:
//           application/json:
//             schema:
//               type: object
//               properties:
//                 username:
//                   type: string
//                 password:
//                   type: string
//               required:
//                 - username
//                 - password
//       responses:
//         '200':
//           description: "Login successful"
//         '401':
//           description: "Invalid credentials"
// */


// {
//    "swagger": "2.0",
//    "info": {
//    "version": "1.0.0",
//    "title": "Login API",
//    "description": "API for user login"
//    },
//    "basePath": "/api/v1",
//    "schemes": [
//    "http"
//    ],
//    "consumes": [
//    "application/json"
//    ],
//    "produces": [
//    "application/json"
//    ],
//    "paths": {
//    "/auth/login": {
//    "post": {
//    "summary": "Login to the application",
//    "tags": [
//    "Authentication"
//    ],
//    "requestBody": {
//    "required": true,
//    "content": {
//    "application/json": {
//    "schema": {
//    "type": "object",
//    "properties": {
//    "username": {
//    "type": "string"
//    },
//    "password": {
//    "type": "string"
//    }
//    },
//    "required": [
//    "username",
//    "password"
//    ]
//    }
//    }
//    }
//    },
//    "responses": {
//    "200": {
//    "description": "Login successful"
//    },
//    "401": {
//    "description": "Invalid credentials"
//    }
//    }
//    }
//    }
//    }
//    }
   
   
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
