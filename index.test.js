

    
   
   import app from "./src/index.js"
   import { set } from "mongoose"
   import  request  from "supertest"




   

   jest.setTimeout(25000)
 
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
    .delete('/api/v1/blogs/63e6d19a8aa2a19e7e05b3d7')
    
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
    .delete("/api/v1/comments/63e443027360766ece6e16a5")
    .expect(200)
    expect(response.body).toBeDefined()
    expect(response.body.message).toBe("delete Successfully");
  })
})

// message


  
describe('GET /messages', () => {
   it('should return an array of messages', async () => {
     const response = await request(app)
       .get('/api/v1/messages')
       .expect(200)
       .expect("Content-type", /json/)
      
         
   })
 
 })
 
  describe("Post/messages",()=>{
   test(' it should return 200 if name, email, and message', async () => {
     const res = await request(app)
     .post('/api/v1/messages')
     //.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFsZXhlbmRyZS5Oa3VydW56aXphQGdtYWlsLmNvbSIsImlkIjoiNjNkZjFmMTkxZjNlYTAzZDkxYjQwNzE4IiwiaWF0IjoxNjc2MTA1NjQxLCJleHAiOjE2NzYxMjAwNDF9.iqx5UpEEoSMRym695TTchWV27gLVrhcoTiR0cOovZ84')
     .send({
         name: "Alexandre",
			email: "Alexandre@gmail.com",
			message: "hello the one"
     })
     .expect(200)
   })
 })
 
 describe("delete message", () =>{
   test('it should delete a message', async () => {
     const res = await request(app)
     .delete('/api/v1/messages/63e054505b30ce4aab6077b1')
     
     .expect(200)
     expect(res.body).toEqual({message: 'Delete Successful!'});
 
    })
     
   test('it should return a 404 status code if the message is not found', async () => {
     const res = await request(app)
     .delete('/api/v1/messages/1123213214')
     .expect("Content-type", /json/)
     .expect(404)
     expect(res.body).toEqual({message: 'Message not found'});
   })
 })
 
 
 
 
 
 describe('Get a single message', () => {
   test('it should return a single message', async () => {
     const res = await request(app)
     .get('/api/v1/messages/63e98b64f97128f0a621c26e')
     .expect("Content-type", /json/)
     .expect(200);
     
   })
 
   test('it should return a 404 status code if the message is not found', async () => {
     const res = await request(app)
     .get('/api/v1/messages/1123213214')
     .expect("Content-type", /json/)
     .expect(404)
     expect(res.body).toEqual({message: 'message not found'});
   })
 })
 
 // users


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
 
 describe('Get a single users', () => {
   test('it should return a single user', async () => {
     const res = await request(app)
     .get('/api/v1/users/63df1f191f3ea03d91b40718')
     .expect("Content-type", /json/)
     .expect(200);
     
   })
   
   test('it should return a 404 status code if the user is not found', async () => {
     const res = await request(app)
     .get('/api/v1/users/1123213214')
     .expect("Content-type", /json/)
     .expect(404)
     expect(res.body).toEqual({message: "User does not exist"});
   })
 })
    
 describe('Get a all users', () => {
  test('it should return a all user', async () => {
    const res = await request(app)
    .get('/api/v1/users')
    .expect("Content-type", /json/)
    .expect(200);
    
  })

})

 


  })
