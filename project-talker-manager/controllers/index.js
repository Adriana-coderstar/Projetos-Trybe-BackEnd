const registeredTalkers = require('./registeredTalkers');
const getTalkerId = require('./getTalkerId');
const addTalkers = require('./addTalkers');
const generateToken = require('./generateToken');
const updateTalkers = require('./updateTalkers');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');

module.exports = {
  registeredTalkers,
  getTalkerId,
  generateToken,
  addTalkers,
  updateTalkers,
  deleteTalker,
  searchTalker,
};