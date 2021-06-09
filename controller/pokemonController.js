const model = require('../model/pokemonModel');

exports.getPokemon = (pageNum, callback) => {
  const offset = 10 * (pageNum - 1);
  model.getPokemon(offset, (data) => {
    callback(data);
  });
}