const fs = require('fs').promises;

const deleteTalker = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const talkers = await fs.readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
  
    const findIndexTalkers = parsedTalkers.findIndex((talker) => talker.id !== Number(id));

    const removeTalker = parsedTalkers.splice(findIndexTalkers, 1);
    
    const stringifyTalker = JSON.stringify(removeTalker, null, 2);
  
    await fs.writeFile('./talker.json', stringifyTalker);
  
    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
};

module.exports = deleteTalker;