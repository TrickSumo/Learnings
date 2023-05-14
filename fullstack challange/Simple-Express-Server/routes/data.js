const express = require('express');
const router = express.Router();
// import authHandler from '../middleware/authHandler';
const {authHandler} = require('../middleware/authHandler');

// Get request with middleware - http://localhost:3003/data?secret=true
router.get('/', authHandler, (req,res)=> {
    res.send("Your secret code is - 123456");
})

// Post request with middleware - http://localhost:3003/data?secret=true&data=123456789
.post('/', authHandler, (req,res) => {
    res.send(`${req.body.newData} Posted Successfully!!!`)
})

module.exports = router;