/**
 * Created by jheun on 11/14/13.
 */

module.exports = {

  index : function(req, res){
    res.render('players/index', { title: 'Players' });
  },

  player : function(req, res) {
    res.render('players/' + req.params.name, { title: 'Player: ' + req.params.name });
  }

};
