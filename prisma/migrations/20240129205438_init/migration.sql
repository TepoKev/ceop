-- CreateTable
CREATE TABLE `images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(512) NOT NULL,
    `userId` INTEGER NOT NULL,
    `createAt` DATETIME(0) NOT NULL,
    `updateAt` DATETIME(0) NOT NULL,

    INDEX `images_FK`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `creationUserId` INTEGER NULL,
    `createAt` DATETIME(0) NOT NULL,
    `updateAt` DATETIME(0) NOT NULL,

    UNIQUE INDEX `roles_name_key`(`name`),
    INDEX `roles_FK`(`creationUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `studies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(1000) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `keywords` VARCHAR(500) NULL,
    `userId` INTEGER NOT NULL,
    `pdfName` VARCHAR(500) NOT NULL,
    `imgId` INTEGER NOT NULL,
    `createAt` DATETIME(0) NOT NULL,
    `updateAt` DATETIME(0) NOT NULL,

    INDEX `studies_FK`(`userId`),
    INDEX `studies_FK_1`(`imgId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(250) NOT NULL,
    `lastName` VARCHAR(250) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `phone` VARCHAR(9) NULL,
    `password` VARCHAR(172) NOT NULL,
    `salt` VARCHAR(172) NOT NULL,
    `createAt` DATETIME(0) NOT NULL,
    `updateAt` DATETIME(0) NOT NULL,
    `roleId` INTEGER NOT NULL,
    `imgProfileId` INTEGER NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    INDEX `users_FK`(`imgProfileId`),
    INDEX `users_FK_1`(`roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roles` ADD CONSTRAINT `roles_FK` FOREIGN KEY (`creationUserId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `studies` ADD CONSTRAINT `studies_FK` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `studies` ADD CONSTRAINT `studies_FK_1` FOREIGN KEY (`imgId`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_FK` FOREIGN KEY (`imgProfileId`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_FK_1` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
