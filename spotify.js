const request = require('request');
require('dotenv').config();
request({
  url: 'https://api.spotify.com/v1/playlists/0Rf8snJF3spd9ux6FOSQYn/tracks',
  headers: {
     'Authorization': process.env.SPOTIFY_TOKEN
  },
  rejectUnauthorized: false
}, function(err, res) {
      if(err) {
        console.error(err);
      } else {
        resposne = JSON.parse(res.body)
        console.log(resposne)
        tracks(resposne.items)
      }

});


let tracks = (items) => {
  for(i of items ){
    console.log(i.track.name)
  }
}