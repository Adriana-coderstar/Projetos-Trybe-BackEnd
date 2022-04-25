require('dotenv').config();

const express = require('express');

const errorHandler = require('./src/middlewares/error.middleware');

const userRouter = require('./src/routes/user.routes');
const loginRouter = require('./src/routes/login.routes');
const categoryRouter = require('./src/routes/category.routes');
const postRouter = require('./src/routes/post.routes');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/categories', categoryRouter);

app.use('/post', postRouter);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
