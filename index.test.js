

    
   
   import app from "./src/index.js"
   import { set } from "mongoose"
   import  request  from "supertest"
   import { Blog } from "./src/models/Blog.js"



   

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
  })

})

 describe("Post/blog",()=>{
  test(' it should return 400 if title, content, or summary is missing', async () => {
    const res = await request(app)
    .post('/api/v1/blogs')
    //.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFsZXhlbmRyZS5Oa3VydW56aXphQGdtYWlsLmNvbSIsImlkIjoiNjNkZjFmMTkxZjNlYTAzZDkxYjQwNzE4IiwiaWF0IjoxNjc2MTA1NjQxLCJleHAiOjE2NzYxMjAwNDF9.iqx5UpEEoSMRym695TTchWV27gLVrhcoTiR0cOovZ84')
    .send({})
    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({ message: 'Please provide all required details' });
  })

  

})

describe("delete blog", () =>{
  test('it should delete a blog', async () => {
    const res = await request(app)
    .delete('/api/v1/blogs/63e22dc167620246a1513e2f')
    
    .expect(200)
    expect(res.body).toEqual({message: 'Blog deleted'});

   })
    
  test('it should return a 404 status code if the blog is not found', async () => {
    const res = await request(app)
    .get('/api/v1/blogs/1123213214')
    .expect("Content-type", /json/)
    .expect(404)
    expect(res.body).toEqual({message: 'Post not found'});
  })
})

describe("Post/like", ()=>{
  test('it should update blog likes', async () => {
    const res = await request(app)
    .post('/api/v1/blogs/63e04959e7c600877ee2163a/likes')
    .expect("Content-type", /json/)
    .expect(200)
})  
  
})



describe('Get a single blog', () => {
  test('it should return a single blog', async () => {
    const res = await request(app)
    .get('/api/v1/blogs/63e04959e7c600877ee2163a')
    .expect("Content-type", /json/)
    .expect(200);
    
  })

  test('it should return a 404 status code if the blog is not found', async () => {
    const res = await request(app)
    .get('/api/v1/blogs/1123213214')
    .expect("Content-type", /json/)
    .expect(404)
    expect(res.body).toEqual({message: 'Post not found'});
  })
})





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
  })

  

  })


  //comment


  
describe("Comment controller", () => {
  test("it should get all comments", async () => {
    const response = await request(app)
    .get("/api/v1/comments")
    .expect(200)
    expect(response.body).toBeDefined();
  })

  test("it should post a comment", async () => {
    const response = await request(app)
      .post("/api/v1/blogs/63e22dc167620246a1513e2f/comments")
      .send({ name: "John Doe", comment: "Test comment" })
      .expect(200)
       expect(response.body).toBeDefined()
       expect(response.body.name).toBe("John Doe")
      expect(response.body.comment).toBe("Test comment")
  });

  test("it should get comments by blog id", async () => {
    const response = await request(app)
    .get("/api/v1/blogs/63e04959e7c600877ee2163a/comments")
    .expect(200)
    expect(response.body).toBeDefined()
  })

  test("it should get a comment by id", async () => {
    const response = await request(app)
    .get("/api/v1/comments/63e443027360766ece6e16a5")
    expect(200)
    expect(response.body).toBeDefined();
  })

  test("it should delete a comment", async () => {
    const response = await request(app)
    .delete("/api/v1/63e4406a4514be7405e86d82/comments/")
    .expect(200)
    expect(response.body).toBeDefined()
    expect(response.body.message).toBe("delete Successfully");
  })
})

// message



  })
