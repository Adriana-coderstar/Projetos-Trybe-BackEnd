require('dotenv').config();
const express = require('express');

const produtctRouter = require('./routes/products.routes');
const salesRouter = require('./routes/sales.routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', produtctRouter);

app.use('/sales', salesRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
