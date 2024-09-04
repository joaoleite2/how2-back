/*
  Warnings:

  - Added the required column `about` to the `Professions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Professions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technicalData` to the `Professions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `professions` ADD COLUMN `about` VARCHAR(191) NOT NULL,
    ADD COLUMN `icon` VARCHAR(191) NOT NULL,
    ADD COLUMN `technicalData` VARCHAR(191) NOT NULL;
