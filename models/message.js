
  import { Schema, model } from "mongoose"

  const schema = Schema({
	name: String,
	email: String,
    message:String  
  })

  
  export const Message = model("message", schema)


