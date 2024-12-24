/*
  Warnings:

  - You are about to drop the column `dateBuildEnd` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `dateBuildStart` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "dateBuildEnd",
DROP COLUMN "dateBuildStart",
DROP COLUMN "jobId";
