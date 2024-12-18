const appService = require("../services/app-service");

module.exports = {
  index: async (req, res) => {
    const files = await appService.getFiles();

    const totalFiles = files.length;
    res.render("index", { totalFiles, files });
  },

  register: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("Nenhum arquivo foi enviado.");
      }

      const newFile = {
        originalname: req.file.originalname,
        buffer: req.file.buffer,
        mimetype: req.file.mimetype,
      };

      await appService.uploadFile(newFile);

      res.redirect("/");
    } catch (error) {
      console.error("Erro ao salvar o arquivo:", error);
      res.status(500).send("Erro interno ao processar o arquivo.");
    }
  },

  download: (req, res) => {
    const { fileName } = req.params;

    appService.getFile(fileName);

    res.redirect("/");
  },

  delete: (req, res) => {
    const { fileName } = req.params;

    appService.deleteFile(fileName);

    res.redirect("/");
  },
};
