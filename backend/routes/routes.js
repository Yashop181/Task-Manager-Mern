const express = require('express');

const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');


const router = express.Router();
router.use("/user", userRoutes); // before the  routes like user/register


 router.use("/task", taskRoutes); // before teh route like task/updatetask
 
 module.exports = router;
