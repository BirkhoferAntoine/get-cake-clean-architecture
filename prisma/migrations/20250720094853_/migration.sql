-- DropIndex
DROP INDEX `CartItem_productId_fkey` ON `cartitem`;

-- AlterTable
ALTER TABLE `cart` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `sessionId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `category` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `image` VARCHAR(191) NOT NULL,
    MODIFY `model` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NULL;
