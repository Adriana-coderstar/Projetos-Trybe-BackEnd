const fs = require('fs').promises;

const registeredTalkers = async (_req, res, next) => {
  try {
    const talkers = await fs.readFile('./talker.json', 'utf-8');

    const parseTalkers = JSON.parse(talkers);

    return res.status(200).json(parseTalkers);
  } catch (e) {
    return next(e);
  }
};

module.exports = registeredTalkers;
