import { Request, Response } from 'express';
import orderService from '../services/orderService';

class OrderController {
  getOrder = async (_req: Request, res: Response) => {
    const { code, arrayOrders } = await orderService.getOrders();

    res.status(code).json(arrayOrders);
  };
}

export default new OrderController();