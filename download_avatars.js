var GITHUB_USER = 'carloferrer';
var GITHUB_TOKEN = '25a869c0dd19873ee0ff69b34be93bcd8c901096';

var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!\n');

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    'url': requestURL,
    'headers': {
      'User-Agent' :  "carloferrer"
    }
  };

  request.get(options, function(err, response, body){

    console.log('Response Status Code: ', response.statusCode, response.statusMessage);
    console.log('Headers / Content Type: ', response.headers['content-type']);


    var bodyJSON = JSON.parse(body);

    for (var i = 0; i < bodyJSON.length; i++) {
      console.log(bodyJSON[i].avatar_url);
    }
  });
}

function downloadImageByURL(url, filePath) {
  // ...
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});