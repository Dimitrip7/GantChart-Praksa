/*
  Warnings:

  - You are about to drop the column `firstname` on the `Partner` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Partner` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Partner" DROP COLUMN "firstname",
DROP COLUMN "lastname",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '';
