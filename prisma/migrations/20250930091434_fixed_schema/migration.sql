/*
  Warnings:

  - You are about to drop the column `Description` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `description` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Listing" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "favoriteIds" SET NOT NULL,
ALTER COLUMN "favoriteIds" SET DATA TYPE TEXT;
