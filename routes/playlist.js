const express = require('express');
const httpStatus = require('http-status-codes');

const weather = require("../lib/weather");
const spotify = require("../lib/spotify");

const router = express.Router();

router.get('/:city', (req, res, next) => {
    
    weather(req.params.city).then(w => {
        spotify(w.genre).then(tracks => {
            res.json({
                cod: httpStatus.OK,
                ...w,
                tracks: tracks
            });
        });
    }, reason => res.json(reason));
}); 

module.exports = router;
