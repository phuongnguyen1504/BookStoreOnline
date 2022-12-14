INSERT INTO `test_book_store`.`category` (`name`) VALUES ('Trinh tham');
INSERT INTO `test_book_store`.`category` (`name`) VALUES ('vien tuong');
INSERT INTO `test_book_store`.`category` (`name`) VALUES ('Hai');
INSERT INTO `test_book_store`.`category` (`name`) VALUES ('Kich');



INSERT INTO `test_book_store`.`book` (`amount`, `author`, `description`, `img_url`, `language`, `name`, `number_rating`, `price`, `publisher`, `total_pages`, `weight`, `year_publish`, `category_id`) VALUES ('10', 'NVA', 'This is descript 1', 'http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg', 'VietNam', 'TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ', '5', '999', 'NXBA', '100', '1.5', '2022-12-12', '1');
INSERT INTO `test_book_store`.`book` (`amount`, `author`, `description`, `img_url`, `language`, `name`, `number_rating`, `price`, `publisher`, `total_pages`, `weight`, `year_publish`, `category_id`) VALUES ('11', 'NVA', 'This is descript 2', 'http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg', 'VietNam', 'TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ', '5', '9999', 'NXBA', '100', '1.5', '2022-12-12', '2');
INSERT INTO `test_book_store`.`book` (`amount`, `author`, `description`, `img_url`, `language`, `name`, `number_rating`, `price`, `publisher`, `total_pages`, `weight`, `year_publish`, `category_id`) VALUES ('12', 'NVA', 'This is descript 3', 'http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg', 'VietNam', 'TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ', '4', '11.11', 'NXBA', '112', '1.2', '2022-12-12', '1');
INSERT INTO `test_book_store`.`book` (`amount`, `author`, `description`, `img_url`, `language`, `name`, `number_rating`, `price`, `publisher`, `total_pages`, `weight`, `year_publish`, `category_id`) VALUES ('22', 'NVA', 'This is descript 4', 'http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg', 'VietNam', 'TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ', '5', '22.22', 'NXBA', '100', '1.4', '2022-12-12', '2');
INSERT INTO `test_book_store`.`book` (`amount`, `author`, `description`, `img_url`, `language`, `name`, `number_rating`, `price`, `publisher`, `total_pages`, `weight`, `year_publish`, `category_id`) VALUES ('11', 'NVA', 'This is descript 5', 'http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg', 'VietNam', 'TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ', '3', '33.12', 'NXBA', '99', '1.5', '2022-12-12', '3');
INSERT INTO `test_book_store`.`book` (`amount`, `author`, `description`, `img_url`, `language`, `name`, `number_rating`, `price`, `publisher`, `total_pages`, `weight`, `year_publish`, `category_id`) VALUES ('2', 'NVA', 'This is descript 6', 'http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg', 'VietNam', 'TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ', '2', '1111', 'NXBA', '20', '1.5', '2022-12-12', '1');
INSERT INTO `test_book_store`.`book` (`amount`, `author`, `description`, `img_url`, `language`, `name`, `number_rating`, `price`, `publisher`, `total_pages`, `weight`, `year_publish`, `category_id`) VALUES ('6', 'NVA', 'This is descript 7', 'http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg', 'VietNam', 'TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ', '1', '2222', 'NXBA', '99', '1.5', '2022-12-12', '2');
UPDATE `test_book_store`.`book` SET `id` = '1' WHERE (`id` = '8');
UPDATE `test_book_store`.`book` SET `id` = '2' WHERE (`id` = '9');
UPDATE `test_book_store`.`book` SET `id` = '3' WHERE (`id` = '10');
UPDATE `test_book_store`.`book` SET `id` = '4' WHERE (`id` = '11');
UPDATE `test_book_store`.`book` SET `id` = '5' WHERE (`id` = '12');
UPDATE `test_book_store`.`book` SET `id` = '6' WHERE (`id` = '13');

ALTER TABLE `test_book_store`.`customer` 
DROP FOREIGN KEY `FKsn7i4emc8fm44n66ge5ulpfio`;
ALTER TABLE `test_book_store`.`customer` 
ADD CONSTRAINT `FKsn7i4emc8fm44n66ge5ulpfio`
  FOREIGN KEY (`username`)
  REFERENCES `test_book_store`.`account` (`username`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

INSERT INTO `test_book_store`.`account` (`username`, `password`) VALUES ('phuong123', '
$12$PaExrVwwai2pkZWG8nyTdOm/XI.XZBhW.gbYRpuzxQDb/o2gGddiG');

INSERT INTO `test_book_store`.`customer` (`address`, `birthday`, `email`, `gender`, `img_url`, `name`, `phone`,`username`) VALUES ('K112 abc', '1992-10-10', 'phuong.misadng@gmail.com', 0, 'test', 'Nguyen Phuong', '09051241','phuong123');

INSERT INTO `test_book_store`.`role` (`name`) VALUES ('ADMIN');
INSERT INTO `test_book_store`.`role` (`name`) VALUES ('USER');
INSERT INTO `test_book_store`.`account_role` (`username`, `role_id`) VALUES ('phuong123', '1');
INSERT INTO `test_book_store`.`account_role` (`username`, `role_id`) VALUES ('phuong123', '2');

INSERT INTO `test_book_store`.`customer` (`id`, `address`, `birthday`, `email`, `gender`, `img_url`, `name`, `phone`, `username`) VALUES ('1', 'K112 abc', '1992-10-10 00:00:00.000000', 'phuong.misadng@gmail.com', 0, 'test', 'Nguyen Phuong', '09051241', 'phuong123');

INSERT INTO `test_book_store`.`cart` (`id`, `customer_id`) VALUES ('1', '1');

INSERT INTO `test_book_store`.`cart_item` (`amount`, `cart_id`, `book_id`) VALUES ('5', '1', '1');
INSERT INTO `test_book_store`.`cart_item` (`amount`, `cart_id`, `book_id`) VALUES ('1', '1', '2');
INSERT INTO `test_book_store`.`cart_item` (`amount`, `cart_id`, `book_id`) VALUES ('2', '1', '3');


