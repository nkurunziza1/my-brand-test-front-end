  
  
  import { Schema, model } from "mongoose"

  const schema = Schema({
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog"
    },
    name: String,
    comment: String
  })

  export const commentSchema = model("Comment", schema)