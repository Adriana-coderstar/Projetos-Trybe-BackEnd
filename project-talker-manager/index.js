const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { 
  errorHandle, 
  validatePassword, 
  validateEmail, 
  validateToken,
  validateName,
  validateAge,
  validateTalks,
  validateRate,
  validateWatchedAt,
  validateDate,
} = require('./middlewares');

const { 
  registeredTalkers, 
  getTalkerId, 
  generateToken, 
  addTalkers, 
  updateTalkers,
  deleteTalker,
  searchTalker,
} = require('./controllers');

const HTTP_OK_STATUS = 200;
const PORT = '3000';
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// CREATE
app.post('/login', validatePassword, validateEmail, generateToken);

app.post('/talker', 
validateToken, 
validateName, 
validateAge, 
validateTalks, 
validateRate,
validateWatchedAt,
validateDate,
addTalkers);

// READ
app.get('/talker', registeredTalkers);

app.get('/talker/search', validateToken, searchTalker);

app.get('/talker/:id', getTalkerId);

// UPDATE
app.put('/talker/:id', 
validateToken, 
validateName, 
validateAge, 
validateTalks,
validateRate,
validateWatchedAt,
validateDate,
updateTalkers);

// DELETE
app.delete('/talker/:id',
validateToken,
deleteTalker);

app.use(errorHandle);

app.listen(PORT, () => {
  console.log('Online');
});
