import { PrismaClient } from "@prisma/client";
const getDbBlockCount = async (
  prisma: PrismaClient
): Promise<number> => prisma.block.count();
export default getDbBlockCount;
