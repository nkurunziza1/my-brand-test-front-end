
   
   import { Schema, model } from "mongoose"

   const schema = Schema({

	title:	String,
   summary: String,
	content:	String,
   image: String,
   likes:{type:Number, default:0},
   createdAt: {
      type: Date,
      default: Date.now
     }
    })
   
        
      

   export const Blog = model("Blog", schema)
   
