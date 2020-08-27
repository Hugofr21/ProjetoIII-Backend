const router = require('express').Router();
const {utilizadorController} = require('../controllers');

// imagens
const imagesPath = 'images/';
const fs = require('fs').promises;
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imagesPath)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg')
    }
  })
var upload = multer({ storage: storage });

router.get('/user', async (req, res) => {
    let userId = req.user.id;

    try {
        const user = (await utilizadorController.retrieve(userId)).toJSON();
        user.imagem = await fs.readFile(imagesPath + user.nomeImagem, {encoding: 'base64'})

        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/user/list/:page/:limit', async (req, res) => {
    const {page, limit} = req.params;

    try {
        const users = await utilizadorController.list(page, limit);
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/user', upload.single('avatar'), async (req, res) => {
    let userId = req.user.id;
    if (req.file) {
        await utilizadorController.update(userId, {nomeImagem: req.file.filename}); 
    }
});

module.exports = router;
