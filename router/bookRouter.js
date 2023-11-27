const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    return res.json({"title": "abc","express":"123"})
})




module.exports  = BooksRouter