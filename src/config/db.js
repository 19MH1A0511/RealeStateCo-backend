import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["warn", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export const connectDB = async (retries = 5) => {
  while (retries) {
    try {
      await prisma.$connect();
      console.log("✅ Database connected successfully");
      return;
    } catch (error) {
      console.error("❌ Database connection failed:", error.message);
      retries -= 1;
      console.log(`Retrying... (${5 - retries}/5)`);
      await new Promise(res => setTimeout(res, 3000));
    }
  }
  process.exit(1);
};

export default prisma;
