const db = require('./db')
// require each of your models here...
const Sequelize = require('sequelize');
const Artist = require('./Artist')
const Song = require('./Song')
const Album = require('./Album')
// ...and give them some nice associations here!

Artist.hasMany(Song);
Song.belongsTo(Artist);

Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album);

module.exports = {
  db,
  Artist,
  Song,
  Album
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
