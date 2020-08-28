CREATE DATABASE  IF NOT EXISTS `student_catalog`;
USE `student_catalog`;
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `student_id` int NOT NULL AUTO_INCREMENT, 
  `student_first_name` varchar(45) DEFAULT NULL,
  `student_last_name` varchar(45) DEFAULT NULL,
  `student_ssn` varchar(20) NOT NULL, 
  PRIMARY KEY (`student_id`));