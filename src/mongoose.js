  
//   import mongoose from "mongoose"

  
//   dotenv.config()

//   const MONGO_URL = process.env.MONGO_URL

//   mongoose.connection.once("open",()=>{
//     console.log("Database connected!".blue.underlined)
//   })

//   mongoose.connection.on("open", ()=>{
//     console.log("error happen")
//   })

//   const mongoConnect = async()=>{
//     await mongoose.connect(MONGO_URL)
//   }
//   const mongoDisconnect = async()=>{
//     await mongoose.disconnect()
//   }

//   export{mongoDisconnect, mongoConnect}