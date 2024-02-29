/*
  Warnings:

  - Added the required column `publishedAt` to the `studies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `studies` ADD COLUMN `lastReviewAt` DATETIME(0) NULL,
    ADD COLUMN `publishedAt` DATETIME(0) NOT NULL;
