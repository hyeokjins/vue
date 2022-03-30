var express = require('express');
var router = express.Router();

router.get('/user/:id', function(req, res){
  const id = req.params.id;
  res.json({id:id, name:'firstttt'});
});

module.exports = router;
