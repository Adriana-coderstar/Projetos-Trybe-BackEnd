const fs = require('fs').promises;

const searchTalker = async (req, res, next) => {
  try {
    const { q } = req.query;
    const talkers = await fs.readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    
    const filterTalkers = parsedTalkers.filter((talker) => {
      const lowerCaseQuery = q.toLowerCase();
      const lowerCaseName = talker.name.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
    
    if (!q) return res.status(200).json(parsedTalkers);
    if (filterTalkers.length === 0) return res.status(200).json([]);
    
    return res.status(200).json(filterTalkers);
  } catch (e) {
    return next(e);
  }
};

module.exports = searchTalker;