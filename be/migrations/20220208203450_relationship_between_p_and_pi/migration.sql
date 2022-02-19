/*
  Warnings:

  - A unique constraint covering the columns `[photo]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "photo" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Product_photo_key" ON "Product"("photo");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_photo_fkey" FOREIGN KEY ("photo") REFERENCES "ProductImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
