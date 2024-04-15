const express = require('express');
const empRouter = express.Router()
const {postEmp,getEmp,deleteEmp, getSearch, updateEmp, cardApi} = require('../controller/empController')



// routing

empRouter.post('/empDetails',postEmp);
empRouter.get('/empDetails',getEmp);
empRouter.delete('/empDetails',deleteEmp);
empRouter.get('/empDetails/:emp_id',getSearch);
empRouter.put('/empDetails/:emp_id',updateEmp)
empRouter.get('/cards',cardApi);

module.exports = empRouter;