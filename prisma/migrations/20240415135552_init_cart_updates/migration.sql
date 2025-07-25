/*
  Warnings:

  - You are about to drop the column `userId` on the `CartItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns (`cartId`,`productId`) on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cartId` to the `CartItem` table without a default value. This is not possible if the table is not empty.
*/

-- 1) Drop the old foreign key and index on CartItem.userId
ALTER TABLE `CartItem`
  DROP FOREIGN KEY `CartItem_userId_fkey`,
  DROP INDEX `CartItem_userId_productId_key`;

-- 2) Create the new Cart table
CREATE TABLE `Cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `userId` INT     NULL,
  `sessionId` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Cart_userId_key`     (`userId`),
  UNIQUE KEY `Cart_sessionId_key`  (`sessionId`),
  KEY        `idx_cart_user`       (`userId`)
) ENGINE=InnoDB;

-- 3) Migrate CartItem: drop userId, add cartId
ALTER TABLE `CartItem`
  DROP COLUMN `userId`,
  ADD COLUMN  `cartId` INT NOT NULL DEFAULT -1;

-- 4) Create the new unique index on CartItem(cartId,productId)
ALTER TABLE `CartItem`
  ADD UNIQUE KEY `CartItem_cartId_productId_key` (`cartId`,`productId`);

-- 5) Add back foreign keys
ALTER TABLE `Cart`
  ADD CONSTRAINT `Cart_userId_fkey`
    FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

ALTER TABLE `CartItem`
  ADD CONSTRAINT `CartItem_cartId_fkey`
    FOREIGN KEY (`cartId`) REFERENCES `Cart` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- 6) Fill in cartId placeholder rows (for any existing rows)
UPDATE `CartItem`
SET `cartId` = (
  SELECT `id`
  FROM `Cart`
  ORDER BY `id`
  LIMIT 1
)
WHERE `cartId` = -1;
