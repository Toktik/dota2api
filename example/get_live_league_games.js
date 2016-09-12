var Dota2Api = require('../lib/dota2api.js');
var dota     = new Dota2Api('<key>');

dota.GetLiveLeagueGames(function (err, data) {
    if (!err) {
        console.log(data);
    } else {
        console.log(err);
    }
});