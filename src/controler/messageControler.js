   
   import { Message } from "../models/message.js"
   
   const  getMessage = async(req, res)=>{
   const message = await Message.find()
	res.send(message)
   }

 
   const postMessage = async (req, res)=>{
	  try{
      const  massage = new Message({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message
		})
		await massage.save()
		res.send(massage)
     }
     catch{
     res.status(500).res.send({error: "something went wrong"})
     }
		
	}	
	 
   const getSingleMessage = async (req, res)=>{
      try{
      const message = await Message.findOne({ _id: req.params.id})
      if(message){
      res.send(message)
      }else{
      res.status(404).send({message:"message not found"})
      }
      }
      catch(error){
      res.status(500).send({error:"Something went wrong"})
      }
      }
	

      const deleteMessage = async (req, res) => {
         try {
         const deletedMessage = await Message.findOneAndDelete({ _id: req.params.id });
         if (deletedMessage) {
         res.send({message:"Delete Successful!"});
         } else {
         res.status(404).send({ error: "Message not found" });
         }
         } catch (error) {
         res.status(500).send({ error: "Internal server error" });
         }
         }

    export {getMessage, postMessage, getSingleMessage, deleteMessage} 
    