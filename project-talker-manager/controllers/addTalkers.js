const fs = require('fs').promises;

const addTalkers = async (req, res, next) => {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const talkers = await fs.readFile('./talker.json', 'utf-8');
    const parseTalkers = JSON.parse(talkers);

    const newIdTalker = parseTalkers.length + 1;
    const newTalker = { id: newIdTalker, name, age, talk: { watchedAt, rate } };
    parseTalkers.push(newTalker);

    const stringifyTalker = JSON.stringify(parseTalkers, null, 2);
    
    await fs.writeFile('./talker.json', stringifyTalker);
    return res.status(201).json(newTalker);
  } catch (e) {
    return next(e);
  }
};

module.exports = addTalkers;