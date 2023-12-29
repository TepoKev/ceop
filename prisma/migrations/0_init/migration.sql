-- CreateTable
CREATE TABLE `images` (
    `uuid` uuid NOT NULL,
    `name` VARCHAR(512) NOT NULL,
    `userUuid` uuid NOT NULL,
    `creationDate` DATETIME(0) NOT NULL,

    INDEX `images_FK`(`userUuid`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `uuid` uuid NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `creationUserUuid` uuid NULL,
    `creationDate` DATETIME(0) NOT NULL,

    INDEX `roles_FK`(`creationUserUuid`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `studies` (
    `uuid` uuid NOT NULL,
    `title` VARCHAR(1000) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `keywords` VARCHAR(500) NULL,
    `userUuid` uuid NOT NULL,
    `pdfPath` VARCHAR(500) NULL,
    `imgUuid` uuid NOT NULL,
    `creationDate` DATETIME(0) NOT NULL,

    INDEX `studies_FK_1`(`imgUuid`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `uuid` uuid NOT NULL,
    `firstName` VARCHAR(250) NOT NULL,
    `lastName` VARCHAR(250) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `phone` VARCHAR(9) NULL,
    `password` VARCHAR(172) NOT NULL,
    `salt` VARCHAR(172) NOT NULL,
    `creationDate` DATETIME(0) NOT NULL,
    `roleUuid` uuid NULL,
    `imgProfileUuid` uuid NULL,

    INDEX `users_FK`(`imgProfileUuid`),
    INDEX `users_FK_1`(`roleUuid`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_FK` FOREIGN KEY (`userUuid`) REFERENCES `users`(`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `roles` ADD CONSTRAINT `roles_FK` FOREIGN KEY (`creationUserUuid`) REFERENCES `users`(`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `studies` ADD CONSTRAINT `studies_FK` FOREIGN KEY (`uuid`) REFERENCES `users`(`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `studies` ADD CONSTRAINT `studies_FK_1` FOREIGN KEY (`imgUuid`) REFERENCES `images`(`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_FK` FOREIGN KEY (`imgProfileUuid`) REFERENCES `images`(`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_FK_1` FOREIGN KEY (`roleUuid`) REFERENCES `roles`(`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

