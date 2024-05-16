const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/image')
    },
    filename: function (req, file, cb) {
        let filename=file.originalname.split('.')
        let [fname,ext]=filename
        let dt=new Date().getSeconds()
        cb(null,fname+dt+'.'+ext)
    }
})

const upload=multer({storage:storage})
module.exports=upload