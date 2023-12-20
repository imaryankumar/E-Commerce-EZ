import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./");
  },
  filename: (req, file, callback) => {
    const uniqueStuff = Date.now();
    callback(null, file.filename + "-" + uniqueStuff);
  },
});

const upload = multer({ storage: storage });

export default upload;
