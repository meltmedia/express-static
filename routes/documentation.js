
var mainNavigation = require('../navigation/mainNavigation');
var markdown = require('marked');

exports.index = function(req, res){
  res.render('documentation',
    {
      mainNavigation: mainNavigation,
      title: 'Documentation',
      markdown: markdown
    });
};