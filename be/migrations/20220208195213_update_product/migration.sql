-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "price" DECIMAL(18,2),
ADD COLUMN     "status" TEXT DEFAULT E'DRAFT';
