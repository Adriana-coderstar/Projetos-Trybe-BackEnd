import prisma from '../models/prismaClient';

class OrderService {
  getOrders = async () => {
    const result = await prisma.order.findMany({
      include: {
        products: {
          select: {
            id: true,
          },
        },
      },
    });

    const arrayOrders = result.map((order) => ({
      ...order, products: order.products.map(({ id }) => id),
    }));
    return { code: 200, arrayOrders };
  };
}

export default new OrderService();