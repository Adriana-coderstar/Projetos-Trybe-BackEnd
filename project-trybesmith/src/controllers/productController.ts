import { Request, Response } from 'express';
import productService from '../services/productService';

class ProductController {
  getProducts = async (req: Request, res: Response) => {
    const { code, result } = await productService.getProducts();

    res.status(code).json(result);
  };

  addProducts = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const { code, item } = await productService.addProduct(name, amount);

    res.status(code).json({ item });
  };
}

export default new ProductController();