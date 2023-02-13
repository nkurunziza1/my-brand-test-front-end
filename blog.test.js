

    
   
   import app from "./src/index.js";
   import { set } from "mongoose";
   import  request  from "supertest";
   import { Blog } from "./src/models/Blog.js";


   

   jest.setTimeout(10000)
 
    describe("blog controller", ()=>{
      beforeAll(async () => {
        await set('strictQuery', true)
        .connect("mongodb+srv://nkurunziza1:DPW3F9J24i7kfTuP@cluster0.9ithra2.mongodb.net/blogs?retryWrites=true&w=majority", { useNewUrlParser: true })
        .then(()=> console.log("database connected"))
      })

      
describe('GET /blogs', () => {
  it('should return an array of blogs', async () => {
    const response = await request(app)
      .get('/api/v1/blogs')
      .expect(200)
      .expect("Content-type", /json/)
     
        expect(Array.isArray(response.body.blog)).toBeTruthy();
  });

});

 describe("Post/blog",()=>{
  it('should return 400 if title, content, or summary is missing', async () => {
    const res = await request(app)
    .post('/api/v1/blogs')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFsZXhlbmRyZS5Oa3VydW56aXphQGdtYWlsLmNvbSIsImlkIjoiNjNkZjFmMTkxZjNlYTAzZDkxYjQwNzE4IiwiaWF0IjoxNjc2MTA1NjQxLCJleHAiOjE2NzYxMjAwNDF9.iqx5UpEEoSMRym695TTchWV27gLVrhcoTiR0cOovZ84')
    .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ message: 'Please provide all required details' });
  });

  

})

describe("delete blog", () =>{
  test("it should delete a blog", async () =>{
      const id = "34343434"
   request(app)
   .delete(`/api/v1/blogs/${id}`).expect(200)
  })
})

// describe('DELETE /blog/:id', () => {
//   it('deletes a blog post', async () => {
//   const blog = await Blog.findOne({ _id: req.params.id })
  
//     const response = await request(app)
//       .delete(`/api/v1/blogs/${blog._id}`)
//       .expect(200);

//     expect(response.body).toStrict({ message: 'Blog deleted' });

//     const deletedBlog = await Blog.findOne({ _id: blog._id });
//     expect(deletedBlog).toBeNull();
//   });

//   it('returns 404 if the blog post is not found', async () => {
//     const response = await request(app)
//       .delete('/api/v1/blogs/nonexistent-id')
//       .expect(404);

//     expect(response.text).toBe('Post not found');
//    });
//   });




describe("POST /signup", () => {
  test("it should create a new user", async () => {
    const res = await request(app)
      .post("/api/v1/signup")
      .send({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
        telephone: "123456789",
        username: "johndoe",
      }) 
    expect(200);
  });

  

  });


  })
