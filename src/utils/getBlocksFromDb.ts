import { Block, PrismaClient } from "@prisma/client";
const getBlocksFromDb = async (
  prisma: PrismaClient,
  since: number
): Promise<Block[]> => {
  const blocks = await prisma.block.findMany({
    where: {
      timestamp: {
        gte: since
      }
    },
    orderBy: {
      timestamp: "desc"
    }
  });
  return blocks;
};
export default getBlocksFromDb;
