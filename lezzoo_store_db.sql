-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2021 at 02:19 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lezzoo_store_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(6) NOT NULL,
  `storeId` int(6) NOT NULL,
  `title` varchar(32) DEFAULT NULL,
  `description` text NOT NULL,
  `imageURL` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `storeId`, `title`, `description`, `imageURL`) VALUES
(8, 4, 'Suit', 'A suit is a set of men\'s or women\'s clothes comprising a suit jacket, or coat, and trousers. When of identical textile, and worn with a collared dress shirt, necktie, and dress shoes', 'https://firebasestorage.googleapis.com/v0/b/lezzoo-store.appspot.com/o/brioni_suit_BST1_1.jpg?alt=media&token=01501ddb-e830-4dfa-aa17-2cf6191f50d2');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(6) NOT NULL,
  `categoryId` int(6) NOT NULL,
  `title` varchar(32) DEFAULT NULL,
  `description` text NOT NULL,
  `imageURL` text NOT NULL,
  `price` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `categoryId`, `title`, `description`, `imageURL`, `price`) VALUES
(4, 8, 'Slim-fit suit in micro-patterned', 'An impeccably crafted suit by BOSS Menswear. Cut to a neat fit for sharp lines, this two-piece suit is designed in stretch fabric blended with a touch of wool for modern character. The distinctive micro pattern pairs effortlessly with a plain BOSS ', 'https://firebasestorage.googleapis.com/v0/b/lezzoo-store.appspot.com/o/hbna50450524_001_300.jpg?alt=media&token=3a463bd7-619d-40ee-9ac5-21d6d56a9459', 536);

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `id` int(6) NOT NULL,
  `title` varchar(32) DEFAULT NULL,
  `description` text NOT NULL,
  `imageURL` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`id`, `title`, `description`, `imageURL`) VALUES
(4, 'HUGO BOSS', 'Hugo Boss AG, often styled as BOSS, is a German luxury fashion house headquartered in Metzingen, Baden-Württemberg.', 'https://firebasestorage.googleapis.com/v0/b/lezzoo-store.appspot.com/o/boss.jpg?alt=media&token=76e73148-b236-4453-b53a-7e5c8a36986e'),
(6, 'Adidas', 'Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories', 'https://firebasestorage.googleapis.com/v0/b/lezzoo-store.appspot.com/o/download.png?alt=media&token=90d5ad8d-60fb-41d1-a142-874e6691f10d'),
(8, 'Nike', 'Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. ', 'https://firebasestorage.googleapis.com/v0/b/lezzoo-store.appspot.com/o/download%20(1).png?alt=media&token=321ae332-10ac-46c7-808b-a91ba7054af9'),
(9, 'Puma', 'Puma SE, branded as Puma, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories', 'https://firebasestorage.googleapis.com/v0/b/lezzoo-store.appspot.com/o/download%20(2).png?alt=media&token=bfe76549-9381-405e-8a65-cf28114a847d');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `storeId` (`storeId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`storeId`) REFERENCES `stores` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
