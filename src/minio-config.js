const Minio = require("minio");

const minioClient = new Minio.Client({
  endPoint: "localhost", // Endereço do servidor MinIO
  port: 9000, // Porta padrão do MinIO
  useSSL: false, // Usar SSL
  accessKey: "admin", // Acesso padrão
  secretKey: "password", // Acesso padrão
});

const bucketName = "meu-bucket";

function uploadFile() {
  const file = document.getElementById("fileUpload").files[0];
  if (!file) {
    alert("Selecione um arquivo antes de fazer o upload.");
    return;
  }

  const params = {
    Bucket: bucketName,
    Key: file.name,
    Body: file,
  };

  minioClient.putObject(params, (err, data) => {
    if (!err) {
      alert("Upload feito com sucesso!");
      totalFiles();
      listFiles();
    }
  });
}

function listFiles() {
  const params = {
    Bucket: bucketName,
  };

  minioClient.listObjects(params, function (err, data) {
    if (!err) {
      const fileList = document.getElementById("fileList");
      fileList.innerHTML = "";

      data.Contents.forEach(function (file) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        fileData = file.Key.split(".");
        td1.textContent = fileData[0];
        td2.textContent = fileData[1];
        tr.appendChild(td1);
        tr.appendChild(td2);
        fileList.appendChild(tr);
      });
    }
  });
}

function totalFiles() {
  const params = {
    Bucket: bucketName,
  };

  minioClient.listObjects(params, function (err, data) {
    if (!err) {
      const totalFiles = document.getElementById("totalFiles");
      totalFiles.textContent = data.Contents.length;
    }
  });
}
