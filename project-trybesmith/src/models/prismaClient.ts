import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/Trybesmith`,
    },
  },
});

export default prisma;