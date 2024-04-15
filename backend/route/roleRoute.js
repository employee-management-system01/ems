const express = require('express');
const roleRouter = express.Router()
const {getRole} = require('../controller/roleController')




// routing

roleRouter.get('/roleDetails',getRole);

module.exports= roleRouter;