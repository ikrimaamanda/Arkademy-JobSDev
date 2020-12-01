-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2020 at 02:35 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobsdev`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `ac_id` int(11) UNSIGNED NOT NULL,
  `ac_name` varchar(50) DEFAULT NULL,
  `ac_email` varchar(50) DEFAULT NULL,
  `ac_phone_number` varchar(20) DEFAULT NULL,
  `ac_password` text DEFAULT NULL,
  `ac_level` int(11) DEFAULT NULL,
  `ac_created_at` timestamp NULL DEFAULT NULL,
  `ac_updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`ac_id`, `ac_name`, `ac_email`, `ac_phone_number`, `ac_password`, `ac_level`, `ac_created_at`, `ac_updated_at`) VALUES
(71, 'Khairul Rizal', 'rizal@gmail.com', '086123456789', '$2b$10$kRfBRFl65OYEaPhwMsE8cuYP1NiweWr6QKuIK0lJt8HObrmU15VXu', 1, '2020-11-19 04:10:08', '2020-11-21 04:30:15'),
(72, 'Rohani Hayati Kusuma', 'rohani@gmail.com', '086123456789', '$2b$10$0T8ZZ3Qo7SDQ1Dkx7OII/ex2NLZsAJhVJrD.S2VjGJhDPY/1SyNhu', 1, '2020-11-19 06:18:48', '2020-11-20 13:35:58'),
(73, 'Amanda Wulandari', 'amanda@gmail.com', '086123456789', '$2b$10$.MRgc4UJnMsH3aqZx3Wqve4xyTZIUgmx5ff2tMtH5CXzFDgqNHreu', 0, '2020-11-20 12:31:30', '2020-11-20 13:59:33'),
(74, 'Yolanda Beauty', 'yolanda@gmail.com', '086123456789', '$2b$10$E6.rLIJaj9ItCBeMBHwtI.vgCQ0VctxSxdvgG4eBx44ZVif8oIrmm', 0, '2020-11-21 04:15:14', '2020-11-21 04:29:55'),
(80, 'Ria', 'ria@gmail.com', '082789098224', '$2b$10$jTD2VwJn6/EEJuwIFg9h5umYw7fBANWm5lc9MN17zRofnDWLr3/gi', 2, '2020-11-21 05:57:08', '2020-11-21 05:57:08'),
(83, 'Rio Ramadhan', 'rio@gmail.com', '086123456789', '$2b$10$9AJgTJR7.7kImur2uZ1QgufYIyYNfnuEjWweB4wSIqB4mIo7bBiuK', 0, '2020-11-30 13:50:41', '2020-12-01 04:12:40'),
(84, 'Rian Raya', 'rian@gmail.com', '086123456789', '$2b$10$Ah2fczuMa43V3aKqmc9Vo.wnmts3rhO4NwS5emgL38.3LiRokpNs2', 0, '2020-12-01 03:32:09', '2020-12-01 04:20:58'),
(85, 'Rama', 'rama@gmail.com', '082789098224', '$2b$10$rmJO80I.1rgaed/dm7Y4KuhDhydPi.wl0CFzcj7iDiycyokJc5Ysy', 0, '2020-12-01 03:33:13', '2020-12-01 03:33:13'),
(86, 'Rafly', 'rafly@gmail.com', '089111363222', '$2b$10$QdtoukX9bjlRXlTXcPWRaOpFqeIPXoijtKHvdSPajU/PS8wFvgr5y', 1, '2020-12-01 03:34:23', '2020-12-01 03:34:23'),
(87, 'Alsya', 'alsya@gmail.com', '089111363222', '$2b$10$.1CVUe4Oht9nI3mOoHQPkeYedMgER83InUoA2mtIW3xTK4WwEKiBK', 1, '2020-12-01 03:35:03', '2020-12-01 03:35:03'),
(88, 'Putri', 'putri@gmail.com', '082789098224', '$2b$10$XreZq/hIpwW./dwB2fBCM.wrgLv8dzGL1/IWLJKsY1DHcnwamspaK', 2, '2020-12-01 13:11:48', '2020-12-01 13:11:48');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) UNSIGNED NOT NULL,
  `ac_id` int(11) UNSIGNED NOT NULL,
  `admin_created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `ac_id`, `admin_created_at`) VALUES
(2, 80, '2020-11-21 05:57:08'),
(79, 88, '2020-12-01 13:11:48');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `cn_id` int(11) UNSIGNED NOT NULL,
  `ac_id` int(11) UNSIGNED NOT NULL,
  `cn_company` varchar(100) DEFAULT NULL,
  `cn_position` varchar(50) DEFAULT NULL,
  `cn_fields` varchar(50) DEFAULT NULL,
  `cn_city` varchar(50) DEFAULT NULL,
  `cn_description` text DEFAULT NULL,
  `cn_instagram` varchar(50) DEFAULT NULL,
  `cn_linkedin` varchar(50) DEFAULT NULL,
  `cn_profile_pict` text DEFAULT NULL,
  `cn_created_at` timestamp NULL DEFAULT current_timestamp(),
  `cn_updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`cn_id`, `ac_id`, `cn_company`, `cn_position`, `cn_fields`, `cn_city`, `cn_description`, `cn_instagram`, `cn_linkedin`, `cn_profile_pict`, `cn_created_at`, `cn_updated_at`) VALUES
(39, 71, 'Telkom Group', 'Manager', 'Information Technology', 'Jakarta', 'We have any project to finish', '@TelkomGroup', 'Telkom Group', 'cnProfilePict-1605925277404.png', '2020-11-21 02:21:17', '2020-11-21 02:21:17'),
(40, 72, 'Telkom Group', 'System Analyst', 'Information Technology', 'Malang', 'We have any project to finish', '@KompasGroup', 'Kompas Group', 'image-1606651502790.png', '2020-11-21 02:19:32', '2020-11-29 12:05:02'),
(42, 86, 'Kompas Group', 'Manager', NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-01 03:34:23', '2020-12-01 03:34:23'),
(43, 87, 'Maju Group', 'Manager', 'Information Technology', 'Jakarta', 'We have any project to finish', '@KompasGroup', 'Kompas Group', 'image-1606828133705.png', '2020-12-01 03:35:03', '2020-12-01 13:09:54');

-- --------------------------------------------------------

--
-- Table structure for table `engineer`
--

CREATE TABLE `engineer` (
  `en_id` int(11) UNSIGNED NOT NULL,
  `ac_id` int(11) UNSIGNED NOT NULL,
  `en_job_title` varchar(50) DEFAULT NULL,
  `en_job_type` enum('freelance','fulltime') DEFAULT NULL,
  `en_location` varchar(50) DEFAULT NULL,
  `en_description` text DEFAULT NULL,
  `en_profile_pict` text DEFAULT NULL,
  `en_created_at` timestamp NULL DEFAULT current_timestamp(),
  `en_updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `engineer`
--

INSERT INTO `engineer` (`en_id`, `ac_id`, `en_job_title`, `en_job_type`, `en_location`, `en_description`, `en_profile_pict`, `en_created_at`, `en_updated_at`) VALUES
(27, 74, 'Software developer', 'freelance', 'Jakarta', 'I work with my teams', 'image-1606536215073.jpg', '2020-11-28 04:11:45', '2020-11-28 04:11:45'),
(30, 83, 'Website Developer', 'freelance', 'Surabaya', 'I work with my teams', 'image-1606744561957.jpg', '2020-11-30 13:50:41', '2020-11-30 13:56:01'),
(31, 84, NULL, NULL, NULL, NULL, NULL, '2020-12-01 03:32:09', '2020-12-01 03:32:09'),
(32, 85, 'Mobile Developer', 'fulltime', 'Surabaya', 'I work with company', 'image-1606794002247.jpg', '2020-12-01 03:33:13', '2020-12-01 03:40:02');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `ex_id` int(11) UNSIGNED NOT NULL,
  `en_id` int(11) UNSIGNED NOT NULL,
  `ex_position` varchar(50) DEFAULT NULL,
  `ex_company` varchar(100) DEFAULT NULL,
  `ex_start_date` date DEFAULT NULL,
  `ex_end_date` date DEFAULT NULL,
  `ex_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`ex_id`, `en_id`, `ex_position`, `ex_company`, `ex_start_date`, `ex_end_date`, `ex_description`) VALUES
(20, 27, 'UI UX Researcher', 'AirBnB', '2019-09-01', '2020-10-11', 'make UI about Hotels apps'),
(23, 30, 'Website developer', 'BCA', '2019-09-01', '2020-10-11', 'build webiste that help BCA to work'),
(24, 30, 'UI UX Researcher', 'AirBnB', '2019-09-01', '2020-10-11', 'make UI about Hotels apps'),
(25, 32, 'Mobile developer', 'Shopee', '2019-09-01', '2020-10-11', 'build mobile app that help BRI to work'),
(26, 32, 'Mobile Developer', 'Tokopedia', '2019-09-01', '2020-10-11', 'build mobile app that help tokopedia to work');

-- --------------------------------------------------------

--
-- Table structure for table `hire`
--

CREATE TABLE `hire` (
  `hr_id` int(11) UNSIGNED NOT NULL,
  `en_id` int(11) UNSIGNED NOT NULL,
  `pj_id` int(11) UNSIGNED NOT NULL,
  `hr_price` bigint(12) UNSIGNED DEFAULT NULL,
  `hr_message` text DEFAULT NULL,
  `hr_status` enum('wait','reject','approve') DEFAULT NULL,
  `hr_date_confirm` datetime DEFAULT NULL,
  `hr_created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hire`
--

INSERT INTO `hire` (`hr_id`, `en_id`, `pj_id`, `hr_price`, `hr_message`, `hr_status`, `hr_date_confirm`, `hr_created_at`) VALUES
(10, 32, 18, 10000000, 'please answer our hire', 'wait', '2020-11-16 00:00:00', '2020-12-01 12:50:41'),
(11, 32, 17, 10000000, 'please answer our hire', 'wait', '2020-11-18 00:00:00', '2020-12-01 12:51:34'),
(12, 30, 16, 10000000, 'read the contract as fast as you can', 'approve', '2020-11-19 00:00:00', '2020-12-01 12:58:54'),
(13, 30, 10, 10000000, 'Thank you and see you', 'reject', '2020-11-19 00:00:00', '2020-12-01 12:59:25'),
(14, 27, 15, 10000000, 'read contract', 'approve', '2020-11-19 00:00:00', '2020-12-01 12:59:34');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `pr_id` int(11) UNSIGNED NOT NULL,
  `en_id` int(11) UNSIGNED NOT NULL,
  `pr_app_name` varchar(50) DEFAULT NULL,
  `pr_description` text DEFAULT NULL,
  `pr_link_pub` varchar(100) DEFAULT NULL,
  `pr_link_repo` varchar(100) DEFAULT NULL,
  `pr_workplace` varchar(100) DEFAULT NULL,
  `pr_type` enum('mobile app','web app') DEFAULT NULL,
  `pr_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`pr_id`, `en_id`, `pr_app_name`, `pr_description`, `pr_link_pub`, `pr_link_repo`, `pr_workplace`, `pr_type`, `pr_image`) VALUES
(13, 27, 'Mobile Banking', 'Sistem yang membantu nasabah mengelola data', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Bank di Indonesia', '', 'portfolioImage-1605932492999.png'),
(14, 30, 'Hagoo', 'System that help people to enjoy playing with their friends', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Hagoo Company', '', 'image-1606745673538.png'),
(15, 30, 'Mobile Netflix', 'Sistem yang membantu pengguna menonton', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Neflix Indonesia', '', 'image-1606746284040.png'),
(16, 32, 'Mobile Joox', 'Sistem yang membantu pengguna mendengarkan lagu', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Joox Indonesia', 'mobile app', 'image-1606796146101.jpg'),
(20, 32, 'Mobile Spotify', 'System that help people to enjoy life', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Spotify Company', 'mobile app', 'image-1606795072089.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `pj_id` int(11) UNSIGNED NOT NULL,
  `cn_id` int(11) UNSIGNED NOT NULL,
  `pj_project_name` varchar(100) DEFAULT NULL,
  `pj_description` text DEFAULT NULL,
  `pj_deadline` date DEFAULT NULL,
  `pj_image` text DEFAULT NULL,
  `pj_created_at` timestamp NULL DEFAULT current_timestamp(),
  `pj_updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pj_id`, `cn_id`, `pj_project_name`, `pj_description`, `pj_deadline`, `pj_image`, `pj_created_at`, `pj_updated_at`) VALUES
(10, 40, 'Build Line Cafe', 'Build with 5 persons', '2020-11-16', 'image-1606652841277.png', '2020-11-21 01:56:20', '2020-11-29 12:27:21'),
(15, 42, 'Build Study apps', 'Build with 3 persons', '2020-11-16', 'image-1606826642470.png', '2020-12-01 12:38:41', '2020-12-01 12:44:02'),
(16, 43, 'Build Racing Apps', 'Build with 5 persons', '2020-11-16', 'image-1606826677640.png', '2020-12-01 12:40:01', '2020-12-01 12:44:37'),
(17, 39, 'Build Mobile Legend', 'Build with 3 persons', '2020-11-16', 'image-1606826929425.png', '2020-12-01 12:48:49', '2020-12-01 12:48:49'),
(18, 39, 'Build PUBG', 'Build with 6 persons', '2020-11-16', 'image-1606826951482.png', '2020-12-01 12:49:11', '2020-12-01 12:49:11');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `sk_id` int(11) UNSIGNED NOT NULL,
  `en_id` int(11) UNSIGNED NOT NULL,
  `sk_skill_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`sk_id`, `en_id`, `sk_skill_name`) VALUES
(13, 27, 'Javascript'),
(17, 30, 'Kotlin'),
(18, 30, 'Flutter'),
(19, 32, 'PHP'),
(20, 32, 'Kotlin'),
(21, 32, 'Java');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`ac_id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `ac_id` (`ac_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`cn_id`),
  ADD KEY `ac_id` (`ac_id`);

--
-- Indexes for table `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`en_id`),
  ADD KEY `ac_id` (`ac_id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`ex_id`),
  ADD KEY `en_id` (`en_id`);

--
-- Indexes for table `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`hr_id`),
  ADD KEY `en_id` (`en_id`),
  ADD KEY `pj_id` (`pj_id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`pr_id`),
  ADD KEY `en_id` (`en_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`pj_id`),
  ADD KEY `cn_id` (`cn_id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`sk_id`),
  ADD KEY `en_id` (`en_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `ac_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `cn_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `engineer`
--
ALTER TABLE `engineer`
  MODIFY `en_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `ex_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `hire`
--
ALTER TABLE `hire`
  MODIFY `hr_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `pr_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `pj_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `sk_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`ac_id`) REFERENCES `account` (`ac_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`ac_id`) REFERENCES `account` (`ac_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `engineer`
--
ALTER TABLE `engineer`
  ADD CONSTRAINT `engineer_ibfk_1` FOREIGN KEY (`ac_id`) REFERENCES `account` (`ac_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hire`
--
ALTER TABLE `hire`
  ADD CONSTRAINT `hire_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hire_ibfk_2` FOREIGN KEY (`pj_id`) REFERENCES `project` (`pj_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `portfolio_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`cn_id`) REFERENCES `company` (`cn_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `skill`
--
ALTER TABLE `skill`
  ADD CONSTRAINT `skill_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
