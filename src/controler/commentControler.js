  
  import { commentSchema } from "../models/comment.js"
  import { Blog } from "../models/Blog.js"
  
   const getComments = async(req, res)=>{
   
    const comments = await commentSchema.find().populate({path: "blog"})
    res.send(comments)

   }

   const postComments = async(req, res)=>{

    const comment = new commentSchema({
      blog: req.params.id,
      name: req.body.name,
      comment: req.body.comment,  
   })
   
   await comment.save()

   return res.status(200).json(comment)

   }

    const getCommentsByBlog = async (req, res)=>{

    const comments = await commentSchema.find({blog: req.params.id})
    .populate({path: "blog"})

    return res.status(200).json(comments)
    
   }


   const getComment = async(req, res)=>{
     try{
        const comment = await commentSchema.findOne({_id: req.params.id})
        .populate({path: "blog"})
        if(comment){
          res.json(comment)
        }
        else{
          return res.status(404).json({message: "comment not found"})
        }
        
     }
     catch{
       res.status(404).json({message:"comment not found"}) 
     }
   }

   const deletComment = async(req, res)=>{
    try{
      const commentGet =  await commentSchema.findOneAndDelete({_id: req.params.id}) 
      if(commentGet){

        res.json({message:"delete Successfully"})

      }

      else{
      return  res.status(404).json({message: "comment not found"})
      } 
    }
    catch{
      res.status(404).json({message: "comment not found"}) 
    }
  }
  export {getComment, postComments, getComments,deletComment,getCommentsByBlog}
//  export const GetComments = getComments
//  export const PostComment = postComments
//  export const GetComment = getComment