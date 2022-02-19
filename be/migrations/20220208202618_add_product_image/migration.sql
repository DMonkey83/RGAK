-- CreateTable
CREATE TABLE "ProductImage" (
    "id" UUID NOT NULL,
    "image" JSONB,
    "altText" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);
