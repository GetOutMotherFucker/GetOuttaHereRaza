var express = require('express');
var router = express.Router();

router.get('/personal', function(req, res) {

  res.render('personal', {
    pageTitle: 'personal',
    pageID: 'personal'
  });

});

module.exports = router;