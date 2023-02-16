    
    import  jwt from 'jsonwebtoken';
    import  { signupSchema } from "../models/signup.js"
    

    const postLoginValues = async (req, res)=>{
        
        try{
        const userLogin = await signupSchema.findOne({email: req.body.email, password:req.body.password})
        
        if(userLogin){
            const secretKey = 'secretKey'
            const token = jwt.sign( {email:userLogin.email, id:userLogin.id,} , secretKey, { expiresIn: '4h' });
            res.status(200).send({ token });
        }else{
         res.status(409).json({message:"invalid password or email"})
        }
        
        }
        catch{
         res.status(404).json({message:"invalid password or username"})
        }
            
        }
        
    export  {postLoginValues};