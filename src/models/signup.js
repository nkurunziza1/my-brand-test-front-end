  
  import { Schema, model } from "mongoose"
  
  const schema = Schema({
    name: String,
    email: String,
    password: String,
    telephone: String,
    username: String,
    userType: String
  })

  export const signupSchema = model("signup", schema)

