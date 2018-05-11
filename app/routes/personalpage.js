var express = require('express');
var router = express.Router();

router.get('/personalpage', function(req, res) {

  res.render('personalpage', {
    pageTitle: 'personalpage',
    pageID: 'personalpage'
  });

});

module.exports = router;