

   
   import  request  from "supertest";
   import app from "./index.js";
//    import { mongoConnect , mongoDisconnect} from "./mongoose";

   
   
   
   
   
  
//   describe("index IPA tes", () =>{
//     beforeAll(async ()=>{
//      await mongoConnect()
//     })
//    })

//   afterall(async ()=>{
//     await mongoDisconnect()
//    })

   describe("blog controller", ()=>{
    
   test("it shall get all blogs", async ()=>{
          await request(app)
         .get("/api/v1/blogs/")
         .expect("Content-type", /json/)

         expect(200)

    })

   })
  
  
   
   
  
   

