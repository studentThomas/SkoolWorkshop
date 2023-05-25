

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(200) NOT NULL,
`description` varchar(400) NOT NULL,
`workshopId` tinyint NOT NULL DEFAULT '0',
`color` varchar(50),
`image` varchar(255) NOT NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES product WRITE;
INSERT INTO product (name, description, workshopId, color, image)
VALUES ('spuitbus', 'description', 1, 'Red', 'URL'),
       ('selfiestick', 'description', 2, 'Blue', 'URL');

UNLOCK TABLES;