
/*
 * GET home page.
 */

var markdown = require('marked');

exports.index = function(req, res){
  res.render('index', { title: 'Express Static', markdown: markdown});
};