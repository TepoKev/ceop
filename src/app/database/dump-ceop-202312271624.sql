-- MariaDB dump 10.19-11.2.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: ceop
-- ------------------------------------------------------
-- Server version	11.2.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `uuid` uuid NOT NULL,
  `name` varchar(512) NOT NULL,
  `userUuid` uuid NOT NULL,
  `creationDate` datetime NOT NULL,
  PRIMARY KEY (`uuid`),
  KEY `images_FK` (`userUuid`),
  CONSTRAINT `images_FK` FOREIGN KEY (`userUuid`) REFERENCES `users` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `uuid` uuid NOT NULL,
  `name` varchar(100) NOT NULL,
  `creationUserUuid` uuid DEFAULT NULL,
  `creationDate` datetime NOT NULL,
  PRIMARY KEY (`uuid`),
  KEY `roles_FK` (`creationUserUuid`),
  CONSTRAINT `roles_FK` FOREIGN KEY (`creationUserUuid`) REFERENCES `users` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES
('ef9d16fd-a414-11ee-92b5-e251eeb7c8c6','admin','2e00cc23-a415-11ee-92b5-e251eeb7c8c6','2023-12-27 06:11:51');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studies`
--

DROP TABLE IF EXISTS `studies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `studies` (
  `uuid` uuid NOT NULL,
  `title` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `keywords` varchar(500) DEFAULT NULL,
  `userUuid` uuid NOT NULL,
  `pdfPath` varchar(500) DEFAULT NULL,
  `imgUuid` uuid NOT NULL,
  `creationDate` datetime NOT NULL,
  PRIMARY KEY (`uuid`),
  KEY `studies_FK_1` (`imgUuid`),
  CONSTRAINT `studies_FK` FOREIGN KEY (`uuid`) REFERENCES `users` (`uuid`),
  CONSTRAINT `studies_FK_1` FOREIGN KEY (`imgUuid`) REFERENCES `images` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studies`
--

LOCK TABLES `studies` WRITE;
/*!40000 ALTER TABLE `studies` DISABLE KEYS */;
/*!40000 ALTER TABLE `studies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `uuid` uuid NOT NULL,
  `firstName` varchar(250) NOT NULL,
  `lastName` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` varchar(9) DEFAULT NULL,
  `password` varchar(172) NOT NULL,
  `salt` varchar(172) NOT NULL,
  `creationDate` datetime NOT NULL,
  `roleUuid` uuid DEFAULT NULL,
  `imgProfileUuid` uuid DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  KEY `users_FK` (`imgProfileUuid`),
  KEY `users_FK_1` (`roleUuid`),
  CONSTRAINT `users_FK` FOREIGN KEY (`imgProfileUuid`) REFERENCES `images` (`uuid`),
  CONSTRAINT `users_FK_1` FOREIGN KEY (`roleUuid`) REFERENCES `roles` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
('2e00cc23-a415-11ee-92b5-e251eeb7c8c6','Jossue Humberto','Henriquez Garcia','jossue.henriquez@ues.edu.sv','71053476','12345678','sdfdsfsad','2023-12-27 06:13:36','ef9d16fd-a414-11ee-92b5-e251eeb7c8c6',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ceop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-27 16:24:04
