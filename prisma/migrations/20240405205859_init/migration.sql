-- Create User table
CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` TEXT NOT NULL,
  `name` TEXT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Create Product table
CREATE TABLE `Product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NOT NULL,
  `price` DOUBLE NOT NULL,
  `category` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `image` TEXT NOT NULL,
  `rating` DOUBLE NOT NULL,
  `ratingCount` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Create CartItem table
CREATE TABLE `CartItem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `userId` INT NOT NULL,
  `productId` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Unique index on User.email
CREATE UNIQUE INDEX `User_email_key` ON `User` (`email`);

-- Unique index on CartItem (userId, productId)
CREATE UNIQUE INDEX `CartItem_userId_productId_key`
  ON `CartItem` (`userId`, `productId`);

-- Foreign key CartItem → User
ALTER TABLE `CartItem`
  ADD CONSTRAINT `CartItem_userId_fkey`
  FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- Foreign key CartItem → Product
ALTER TABLE `CartItem`
  ADD CONSTRAINT `CartItem_productId_fkey`
  FOREIGN KEY (`productId`) REFERENCES `Product` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
