var express = require('express');
var router = express.Router();

router.get('/history', function(req, res) {

  res.render('history', {
    pageTitle: 'history',
    pageID: 'history'
  });

});

module.exports = router;