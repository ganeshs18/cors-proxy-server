const axios = require('axios');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/api', async function (req, res, next) {
    console.log(req.url)
    if(!req.body){
        res.json({
            'message': 'failed to load'
        })
        return
    }
    const data = req.body
    let response = await axios.request({ ...data }).catch((e)=>{
        console.log('errrr',e)
    });

    if (response) {
        res.json(response.data);
        return
    }
    res.json({
        'message': 'failed to load'
    })
});


module.exports = router;
