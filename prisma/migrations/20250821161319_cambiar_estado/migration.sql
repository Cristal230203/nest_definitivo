/*
  Warnings:

  - You are about to drop the column `name` on the `carnets` table. All the data in the column will be lost.
  - Added the required column `estado` to the `carnets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carnets` DROP COLUMN `name`,
    ADD COLUMN `estado` BOOLEAN NOT NULL;
