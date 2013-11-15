/**
 * Created by jheun on 11/14/13.
 */

var fs = require('fs');
var mkdirp = require('mkdirp');

module = module.exports = function(req, body){

  var destination;

  if (req.originalUrl !== '/'){
    destination = './dist'+req.originalUrl+'/index.html';
  }else {
    destination = './dist'+req.originalUrl+'index.html';
  }

  console.log("writer punch dick", destination);

  var writeHtml = function(){
    fs.writeFile(destination, body, function(err){
      if (err){
        return console.log(err);
      }else {
        console.log('Wrote to >' + destination);
      }
    });
  };

  mkdirp('./dist'+req.originalUrl, function(err) {
    if (err){
      console.log(err);
    }else {
      writeHtml();
    }
  });

};