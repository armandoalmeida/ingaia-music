var express = require('express');
var router = express.Router();

router.get('/:city', function (req, res, next) {
  res.json({
    city: req.params.city,
    playlist: [
      {
        author: 'Pink Floyd',
        song: 'Hey You'
      }
    ]
  });
});

module.exports = router;
