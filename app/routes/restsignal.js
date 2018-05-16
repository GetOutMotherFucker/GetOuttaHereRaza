var express = require('express');
var router = express.Router();

router.get('/restsignal', function(req, res) {

  res.render('restsignal', {
    pageTitle: 'restsignal',
    pageID: 'restsignal'
  });

});

module.exports = router;