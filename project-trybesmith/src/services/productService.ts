import prisma from '../models/prismaClient';

class ProductService {
  getProducts = async () => {
    const result = await prisma.product.findMany();
    return { code: 200, result };
  };

  addProduct = async (name: string, amount: string) => {
    const item = await prisma.product.create({
      data: { name, amount },
    });
    return { code: 201, item };
  };
}

export default new ProductService();