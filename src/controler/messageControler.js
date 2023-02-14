   
   import { Message } from "../models/message.js"
   
   const  getMessage = async(req, res)=>{
   const message = await Message.find()
	res.json(message)
   }

 
   const postMessage = async (req, res)=>{
	  try{
      const  massage = new Message({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message
		})
		await massage.save()
		res.json(massage)
     }
     catch{
     res.status(500).res.json({message: "something went wrong"})
     }
		
	}	
	 
   const getSingleMessage = async (req, res)=>{
      try{
      const message = await Message.findOne({ _id: req.params.id})
      if(message){
      res.json(message)
      }else{
      res.status(404).json({message:"message not found"})
      }
      }
      catch(message){
      res.status(404).json({message:"message not found"})
      }
      }
	

      const deleteMessage = async (req, res) => {
         try {
         const deletedMessage = await Message.findOneAndDelete({ _id: req.params.id });
         if (deletedMessage) {
         res.json({message:"Delete Successful!"});
         } else {
         res.status(404).json({ message: "Message not found" });
         }
         } catch (message) {
         res.status(404).json({ message: "Message not found" });
         }
         }

    export {getMessage, postMessage, getSingleMessage, deleteMessage} 
    