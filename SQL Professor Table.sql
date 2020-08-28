CREATE DATABASE  IF NOT EXISTS `student_catalog`;
USE `student_catalog`;
DROP TABLE IF EXISTS `professor`;
CREATE TABLE `professor` (
  `professor_id` int NOT NULL AUTO_INCREMENT, 
  `professor_first_name` varchar(45) DEFAULT NULL,
  `professor_last_name` varchar(45) DEFAULT NULL,
  `professor_ssn` varchar(20) NOT NULL, 
  PRIMARY KEY (`professor_id`));