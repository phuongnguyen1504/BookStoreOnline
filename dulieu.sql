-- MySQL Script generated by MySQL Workbench
-- Tue Mar 14 21:23:16 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
-- -----------------------------------------------------
-- Schema test_book_store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema test_book_store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `test_book_store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`animal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cage_id` INT NULL DEFAULT NULL,
  `is_sick` BIT(1) NOT NULL,
  `weight` FLOAT NOT NULL,
  `date_in` DATE NOT NULL,
  `date_out` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `gender` BIT(1) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `img_url` VARCHAR(255) NULL DEFAULT NULL,
  `birthday` DATETIME(6) NULL DEFAULT NULL,
  `identity_number` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_employee_user1_idx` (`username` ASC) VISIBLE,
  CONSTRAINT `fk_employee_user1`
    FOREIGN KEY (`username`)
    REFERENCES `mydb`.`user` (`username`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`news`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`news` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(255) NULL DEFAULT NULL,
  `content` LONGTEXT NOT NULL,
  `date_create` DATE NULL DEFAULT NULL,
  `first_sentence` TEXT NOT NULL,
  `source_url` VARCHAR(255) NULL DEFAULT NULL,
  `title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_role` (
  `username` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`username`, `role_id`),
  INDEX `fk_user_has_role_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_user_has_role_user_idx` (`username` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_role_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`),
  CONSTRAINT `fk_user_has_role_user`
    FOREIGN KEY (`username`)
    REFERENCES `mydb`.`user` (`username`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

USE `test_book_store` ;

-- -----------------------------------------------------
-- Table `test_book_store`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`account` (
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`role` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`account_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`account_role` (
  `username` VARCHAR(255) NOT NULL,
  `role_id` BIGINT NOT NULL,
  INDEX `FKrs2s3m3039h0xt8d5yhwbuyam` (`role_id` ASC) VISIBLE,
  INDEX `FK6maxca7k70niuh7p1mo6duxx9` (`username` ASC) VISIBLE,
  CONSTRAINT `FK6maxca7k70niuh7p1mo6duxx9`
    FOREIGN KEY (`username`)
    REFERENCES `test_book_store`.`account` (`username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FKrs2s3m3039h0xt8d5yhwbuyam`
    FOREIGN KEY (`role_id`)
    REFERENCES `test_book_store`.`role` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`category` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`book` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `amount` INT NULL DEFAULT NULL,
  `author` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `img_url` VARCHAR(255) NULL DEFAULT NULL,
  `language` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `number_rating` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `publisher` VARCHAR(255) NULL DEFAULT NULL,
  `total_pages` INT NULL DEFAULT NULL,
  `weight` DOUBLE NULL DEFAULT NULL,
  `year_publish` DATETIME(6) NULL DEFAULT NULL,
  `category_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKam9riv8y6rjwkua1gapdfew4j` (`category_id` ASC) VISIBLE,
  CONSTRAINT `FKam9riv8y6rjwkua1gapdfew4j`
    FOREIGN KEY (`category_id`)
    REFERENCES `test_book_store`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 40
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`customer` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `birthday` DATETIME(6) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `gender` BIT(1) NOT NULL,
  `img_url` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKsn7i4emc8fm44n66ge5ulpfio` (`username` ASC) VISIBLE,
  CONSTRAINT `FKsn7i4emc8fm44n66ge5ulpfio`
    FOREIGN KEY (`username`)
    REFERENCES `test_book_store`.`account` (`username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 41
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`book_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`book_order` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `date_delivery` DATE NULL DEFAULT NULL,
  `date_order` DATE NULL DEFAULT NULL,
  `date_receipt` DATE NULL DEFAULT NULL,
  `total_price` DOUBLE NULL DEFAULT NULL,
  `customer_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKg9dfl5a6p0v1s3infwn0njds9` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `FKg9dfl5a6p0v1s3infwn0njds9`
    FOREIGN KEY (`customer_id`)
    REFERENCES `test_book_store`.`customer` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`cart` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `customer_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKdebwvad6pp1ekiqy5jtixqbaj` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `FKdebwvad6pp1ekiqy5jtixqbaj`
    FOREIGN KEY (`customer_id`)
    REFERENCES `test_book_store`.`customer` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 34
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`cart_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`cart_item` (
  `book_id` BIGINT NOT NULL,
  `cart_id` BIGINT NOT NULL,
  `date_add` DATETIME(6) NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `book_id_list` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`book_id`, `cart_id`),
  INDEX `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id` ASC) VISIBLE,
  INDEX `FK2k9bac21fpcsduu1didauv419` (`book_id_list` ASC) VISIBLE,
  CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3`
    FOREIGN KEY (`cart_id`)
    REFERENCES `test_book_store`.`cart` (`id`),
  CONSTRAINT `FK2k9bac21fpcsduu1didauv419`
    FOREIGN KEY (`book_id_list`)
    REFERENCES `test_book_store`.`book` (`id`),
  CONSTRAINT `FKis5hg85qbs5d91etr4mvd4tx6`
    FOREIGN KEY (`book_id`)
    REFERENCES `test_book_store`.`book` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_book_store`.`order_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_book_store`.`order_detail` (
  `amount` INT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `order_id` BIGINT NOT NULL,
  `book_id` BIGINT NOT NULL,
  PRIMARY KEY (`book_id`, `order_id`),
  INDEX `FKianqbcay3fv1gjrqimfiwd1wa` (`order_id` ASC) VISIBLE,
  CONSTRAINT `FK3aceepmpjwpo8pdn7gmjdfckq`
    FOREIGN KEY (`book_id`)
    REFERENCES `test_book_store`.`book` (`id`),
  CONSTRAINT `FKianqbcay3fv1gjrqimfiwd1wa`
    FOREIGN KEY (`order_id`)
    REFERENCES `test_book_store`.`book_order` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
