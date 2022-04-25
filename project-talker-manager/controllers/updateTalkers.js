const fs = require('fs').promises;

const updateTalkers = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const toUpdateTalkers = await fs.readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(toUpdateTalkers);

    const findIndexTalkers = parsedTalkers.findIndex((talker) => talker.id === Number(id));
    const updateNewTalker = { id: Number(id), name, age, talk };

    parsedTalkers[findIndexTalkers] = updateNewTalker;

    const stringifyUpdate = JSON.stringify(parsedTalkers, null, 2);

    await fs.writeFile('./talker.json', stringifyUpdate);
    return res.status(200).json(updateNewTalker);
  } catch (e) {
    return next(e);
  }
};

module.exports = updateTalkers;