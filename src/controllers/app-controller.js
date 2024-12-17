const files = [
  { fileName: "Teste1", extension: "txt" },
  { fileName: "Teste2", extension: "png" },
];

module.exports = {
  index: (req, res) => {
    const totalFiles = 10;

    res.render("index", { totalFiles, files });
  },

  register: (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("Nenhum arquivo foi enviado.");
      }

      const photo = {
        originalname: req.file.originalname,
        buffer: req.file.buffer,
        mimetype: req.file.mimetype,
      };

      const newPhoto = {
        fileName: req.file.originalname,
        extension: req.file.mimetype,
      };

      files.push(newPhoto);
      res.redirect("/");
    } catch (error) {
      console.error("Erro ao salvar o arquivo:", error);
      res.status(500).send("Erro interno ao processar o arquivo.");
    }
  },

  test: (req, res) => {
    console.log(req);
  },
};
