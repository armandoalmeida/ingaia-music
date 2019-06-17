const express = require('express');
const httpStatus = require('http-status-codes');

const weatherLib = require("../lib/weather");
const spotifyLib = require("../lib/spotify");

const router = express.Router();

router.get('/:city', (req, res, next) => {
    
    weatherLib(req.params.city).then(weather => {
        spotifyLib(weather.genre).then(tracks => {
            res.json({
                cod: httpStatus.OK,
                ...weather,
                tracks: tracks
            });
        });
    }, reason => res.json(reason));
}); 

module.exports = router;
