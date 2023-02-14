  
  
  import { Router } from "express"
  const commentRouter = Router()
  import { getComment, getComments, postComments, deletComment ,getCommentsByBlog} from "../controler/commentControler.js"
  import validate from "../validationMiddleware/validate.js"
  import CommentValidation from "../validation/commentValidation.js"
  

  
  // commentRouter.post("/:id",validate(CommentValidation), postComments)
  // commentRouter.get("/get-blog-comments/:id", getCommentsByBlog)
  commentRouter.get("/:id", getComment)
  commentRouter.get("", getComments)
  commentRouter.delete("/:id", deletComment)


  export default commentRouter; 
