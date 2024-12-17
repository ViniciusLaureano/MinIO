const Minio = require("minio");

// Configuração do cliente MinIO
const minioClient = new Minio.Client({
  endPoint: "localhost", // Endereço do servidor MinIO
  port: 9000, // Porta padrão do MinIO
  useSSL: false, // Usar SSL
  accessKey: "admin", // Acesso padrão
  secretKey: "password", // Acesso padrão
});

const bucketName = "meu-bucket";

// Criação de um bucket
async function createBucket() {
  const exists = await minioClient.bucketExists(bucketName);
  if (!exists) {
    await minioClient.makeBucket(bucketName, "us-east-1");
    console.log(`Bucket '${bucketName}' criado.`);
  } else {
    console.log(`Bucket '${bucketName}' já existe.`);
  }
}

// Upload de um arquivo
async function uploadFile() {
  const filePath = "./src/docs/test.txt"; // Caminho do arquivo
  const fileName = "test.txt"; // Nome do arquivo no MinIO

  await minioClient.fPutObject(bucketName, fileName, filePath);
  console.log(`Arquivo '${fileName}' enviado para o bucket '${bucketName}'`);
}

// Função de inicialização
async function init() {
  await createBucket();
  await uploadFile();
}

init();
