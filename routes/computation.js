var express = require('express');
var router = express.Router();
var value;
var min = 0;
var max = 500;


router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
     
    value=(Math.random() * (max - min) + min).toFixed(2);
    res.write("Outputs for various Math Functions \n")
    res.write('Math.log2() applied to '+value+" is "+Math.log2(value)+"\n");
    res.write('Math.cosh() applied to '+value+" is "+Math.cosh(value)+"\n");
    res.end('Math.floor() applied to '+value+" is "+Math.floor(value));
 });

module.exports = router;
