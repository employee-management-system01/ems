const multer = require('multer')
const multerS3=require('multer-s3')
const { S3Client}=require('@aws-sdk/client-s3')

const bucketName = "upload-image02";
// store file in AWS S3 configuration 

const s3 = new S3Client({
    region:  "ap-south-1",
    credentials: {
        accessKeyId: "AKIAZI2LGN2UOTSWHR6C",
        secretAccessKey: "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"
    }
})

//Storage Configuration
let storage = multerS3({
    s3: s3,
    bucket: bucketName,
    acl: 'public-read',
    metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname })
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
        cb(null, file.originalname)
    }

})


let upload = multer({ storage: storage })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './Public/images/uploads')
//     },
//     filename: function (req, file, cb) {
// //         let filename=file.originalname.split('.')
//       const fn= `image-${Date.now()}.${file.originalname}`
//         cb(null,fn)
//     }
// })

// const upload=multer({storage:storage})



module.exports=upload