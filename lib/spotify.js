const request = require("request");
const config = require("./config");

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(config.spotify.clientId + ':' + config.spotify.clientSecret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

const spotify = (genre) => {
    return new Promise((resolve, reject) => {

        request.post(authOptions, function (error, response, body) {

            if (!error && response.statusCode === 200) {

                var token = body.access_token;
                var options = {
                    url: `https://api.spotify.com/v1/search?q=genre:${genre}&type=track`,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };

                request.get(options, function (error, response, body) {

                    var tracks = [];

                    if (body.tracks.items) {
                        body.tracks.items.map(item => {
                            tracks.push({
                                track: item.name,
                                artist: item.artists.map(a => a.name),
                                album: item.album.name
                            });
                        });
                    }

                    resolve(tracks);
                });

            } else {
                reject(error);
            }

        });
    })
};

module.exports = spotify;