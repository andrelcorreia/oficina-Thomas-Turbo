import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
	datasources: { db: { url: String() } },
});

export default prisma;
