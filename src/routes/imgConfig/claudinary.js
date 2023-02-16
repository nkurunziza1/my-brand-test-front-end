
  import multer from "multer";
  import { CloudinaryStorage } from "multer-storage-cloudinary";
  import { v2 as cloudinary } from "cloudinary";
  cloudinary.config({
    cloud_name: "ddic497qm",
	api_key: 466351898722794,
	api_secret: "cFWXOpWGLGRuyNl2WstYsd_2150"
  })
   const storage = new CloudinaryStorage(
    {
        cloudinary: cloudinary,
        params: {
            folder: "DEV"
        },
    }
   );
   const upload = multer({ storage: storage });
   export default upload;

