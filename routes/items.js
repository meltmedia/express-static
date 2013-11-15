/**
 * Created by jheun on 11/14/13.
 */


exports.item = function(req, res){
  res.render('players/richard/index', { title: 'Item: ' + req.params.id });
};