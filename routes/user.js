
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('users/index', { title: 'Users, Bitch' });
};