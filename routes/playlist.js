import express from 'express';
import request from "request";

const router = express.Router();

const weatherAppId = "012fb3d2351e593e6d57e41611ad97f0";

router.get('/:city', (req, res, next) => {

  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=metric&APPID=${weatherAppId}`;

  request.get(weatherURL, (error, response, body) => {
    if (error) {
      return console.error(error);
    }
    res.json(JSON.parse(body))
  });

});

module.exports = router;
