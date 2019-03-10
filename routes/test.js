var express = require('express');
var router = express.Router();

router.get('/', function( req, res, next ){

    res.send('working hard or hardly working');
});

module.exports = router;