DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(200) NOT NULL,
`description` varchar(400) NOT NULL,
`code` bigint,
`image` varchar(255) NOT NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES product WRITE;
INSERT INTO product VALUES (1,'spuitbus', 'description',1234, 'URL'),
(2,'selfiestick', 'description', 4321, 'URL');
UNLOCK TABLES;