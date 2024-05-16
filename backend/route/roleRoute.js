const express = require('express');
const roleRouter = express.Router()
const {getRole,postRole,deleteRole,roleAssign, AssRole,deleteRoleAss} = require('../controller/roleController')




// routing

roleRouter.get('/roleDetails',getRole);
roleRouter.post('/roleDetails',postRole);
roleRouter.delete('/roleDetails/:role_id',deleteRole);
roleRouter.get('/roleDetails/:emp_id',roleAssign);
roleRouter.post('/roleDetails/roleass',AssRole);
roleRouter.delete('/roleDetails/roleassDel/:role_id',deleteRoleAss);

module.exports = roleRouter;