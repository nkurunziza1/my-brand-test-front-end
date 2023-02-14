  
  import { Router } from "express"
  import  uploadImage  from "./imgConfig/claudinary.js"
  const blogRouter = Router()
  import { getBlogs, postBlog, getSingleBlog, updateBlog, deleteSingleBlog , updateBlogLikes} from "../controler/blogControler.js"
  // import { ValidationBlogSchema } from '../validation/blogValidation.js'
  // import validate from "../validationMiddleware/validate.js"
  import passport from "passport"
  import { getCommentsByBlog, postComments } from "../controler/commentControler.js"
  import CommentValidation from "../validation/commentValidation.js"
  import validate from "../validationMiddleware/validate.js"

  
  blogRouter.get("/", getBlogs)
  
  blogRouter.post("/" ,uploadImage.single('image'), postBlog)
  blogRouter.get("/:id", getSingleBlog)
  blogRouter.post("/:id/likes", updateBlogLikes)
  blogRouter.post("/:id/comments",validate(CommentValidation), postComments)
  blogRouter.get("/:id/comments", getCommentsByBlog)
  blogRouter.patch("/:id",updateBlog)
  blogRouter.delete("/:id",  deleteSingleBlog)

  // passport.authenticate('jwt', {session: false})
   
  export default blogRouter;