const fs = require('fs').promises;

const getTalkerId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talkersId = await fs.readFile('./talker.json', 'utf-8');

    const parseId = JSON.parse(talkersId);

    const talkers = parseId.find((talker) => talker.id === Number(id));
    if (!talkers) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });  
    }

    return res.status(200).json(talkers); 
  } catch (e) {
    return next(e);
  }
};
module.exports = getTalkerId;