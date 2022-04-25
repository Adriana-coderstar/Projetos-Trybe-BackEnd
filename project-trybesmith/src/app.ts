import 'dotenv/config';
import express from 'express';
import productRoutes from './routes/productsRoute';
import userRoutes from './routes/usersRoute';
import orderRoutes from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.use('/orders', orderRoutes);

export default app;
