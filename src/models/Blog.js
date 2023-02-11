
   
   import { Schema, model } from "mongoose"

   const schema = Schema({

	title:	String,
   summary: String,
	content:	String,
   image: String,
   likes:{type:Number, default:0}

   })

   export const Blog = model("Blog", schema)
   
