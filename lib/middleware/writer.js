/**
 * Created by jheun on 11/14/13.
 */

var fs = require('fs'),
    mkdirp = require('mkdirp'),
    DIST_BASE_DIR = "./dist";

/**
 * Writes the given content to the desired destination
 * @param destination The destination of the file to be written
 * @param body The content to be written to the file
 */
var writeHtml = function(destination, body){

  fs.writeFile(destination, body, function(err){

    /*@todo: Better handling here*/
    if (err){
      throw new Error("Writer:: Issue writing to destination '" + destination + "'");
    }else {
      console.log('Wrote to >' + destination);
    }

  });

};

/**
 * Writes the given body to the directory equivalent to the requests original url
 * @param req The Express wrapped request made to the server.
 * @param body The html body to be rendered.
 */
var scribe = function(req, body) {

  var directory = DIST_BASE_DIR + req.originalUrl,
      destination = DIST_BASE_DIR;

  // Determine the correct destination
  if (req.originalUrl !== '/'){
    destination += req.originalUrl + '/index.html';
  }else {
    destination += req.originalUrl + 'index.html';
  }

  // Make the necessary folder and write the html
  mkdirp(directory, function(err) {
    if (err){
      throw new Error("Writer:: Issue creating directory '" + destination + "'");
    }else {
      writeHtml(destination, body);
    }
  });

};

/**
 * Highjacks the res.send method in order to get a hold of the content to be rendered
 * @param req The Express wrapped request object
 * @param res The Express wrapped response object
 * @param next Used to trigger the next middleware
 */
var watch = function(req, res, next) {

  // Copy a reference to the proper res.send method
  var _send = res.send;

  // Replace the existing send method with out temp method
  res.send = function() {

    // Call the original send to finish the request
    _send.apply(res, arguments);
    // Write out the content
    scribe(req, arguments[0]);

  };

  next();

};

exports = module.exports = {

  scribe : scribe,
  watch : watch

};