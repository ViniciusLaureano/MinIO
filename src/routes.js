const express = require("express");
const appController = require("./controllers/app-controller");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.get("/", appController.index);

router.post("/register", upload.single("fileUpload"), appController.register);

module.exports = router;
