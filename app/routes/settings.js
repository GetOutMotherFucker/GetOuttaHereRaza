var express = require('express');
var router = express.Router();

router.get('/settings', function(req, res) {

  res.render('settings', {
    pageTitle: 'settings',
    pageID: 'settings'
  });

});

module.exports = router;