/**
 * Created by jheun on 11/14/13.
 */

module.exports = {

  index : function(req, res){
    res.render('players/index', { title: 'Players' });
  },

  player : function(req, res) {
    var name = req.params.name;
    res.render('players/player/index', {
      title: 'Player: ' + name,
      name: name
    });
  }

};
