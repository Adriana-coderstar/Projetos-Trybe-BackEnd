import { Router } from 'express';

import productController from '../controllers/productController';
import productValidate from '../middlewares/productValidate';

const productRoutes = Router();

productRoutes.get('/', productController.getProducts);

productRoutes.post('/', productValidate, productController.addProducts);

export default productRoutes;