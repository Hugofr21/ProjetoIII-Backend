const imagesPath = 'images/';
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imagesPath)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg')
    }
})
const upload = multer({ storage: storage });
module.exports = {
    upload
};