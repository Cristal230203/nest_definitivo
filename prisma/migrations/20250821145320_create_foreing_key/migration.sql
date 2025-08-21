/*
  Warnings:

  - Added the required column `carnet_id` to the `vendedores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vendedores` ADD COLUMN `carnet_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `vendedores` ADD CONSTRAINT `vendedores_carnet_id_fkey` FOREIGN KEY (`carnet_id`) REFERENCES `carnets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
