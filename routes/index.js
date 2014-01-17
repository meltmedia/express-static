
/*
 * GET home page.
 */

var mainNavigation = require('../navigation/mainNavigation');
var markdown = require('marked');

exports.index = function(req, res){
  res.render('index',
    {
      mainNavigation: mainNavigation,
      title: 'About',
      markdown: markdown
    });
};