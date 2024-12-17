require("dotenv").config();
const minioClient = require("../config/minio-client");

const bucketName = process.env.BUCKET_NAME;
module.exports = {
  getFiles: async () => {
    const fileList = [];
    return new Promise((resolve, reject) => {
      const stream = minioClient.listObjects(bucketName);

      stream.on("data", (obj) => {
        const fileName = obj.name.split(".")[0];
        const extension = obj.name.split(".")[1];
        fileList.push({ fileName, extension });
      });
      stream.on("end", () => {
        resolve(fileList);
      });
      stream.on("error", (err) => {
        console.error("Erro no stream:", err);
        reject(err);
      });
    });
  },

  uploadFile: async (file) => {
    const fileName = `${file.originalname}`;

    await minioClient.putObject(
      bucketName,
      fileName,
      file.buffer,
      file.buffer.length,
      {
        "Content-Type": file.mimetype,
      }
    );
  },
};
