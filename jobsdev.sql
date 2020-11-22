-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Nov 2020 pada 08.15
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.11

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
-- Struktur dari tabel `account`
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
-- Dumping data untuk tabel `account`
--

INSERT INTO `account` (`ac_id`, `ac_name`, `ac_email`, `ac_phone_number`, `ac_password`, `ac_level`, `ac_created_at`, `ac_updated_at`) VALUES
(71, 'Khairul Rizal', 'rizal@gmail.com', '086123456789', '$2b$10$kRfBRFl65OYEaPhwMsE8cuYP1NiweWr6QKuIK0lJt8HObrmU15VXu', 1, '2020-11-19 04:10:08', '2020-11-21 04:30:15'),
(72, 'Rohani Hayati Kusuma', 'rohani@gmail.com', '086123456789', '$2b$10$0T8ZZ3Qo7SDQ1Dkx7OII/ex2NLZsAJhVJrD.S2VjGJhDPY/1SyNhu', 1, '2020-11-19 06:18:48', '2020-11-20 13:35:58'),
(73, 'Amanda Wulandari', 'amanda@gmail.com', '086123456789', '$2b$10$.MRgc4UJnMsH3aqZx3Wqve4xyTZIUgmx5ff2tMtH5CXzFDgqNHreu', 0, '2020-11-20 12:31:30', '2020-11-20 13:59:33'),
(74, 'Yolanda Beauty', 'yolanda@gmail.com', '086123456789', '$2b$10$E6.rLIJaj9ItCBeMBHwtI.vgCQ0VctxSxdvgG4eBx44ZVif8oIrmm', 0, '2020-11-21 04:15:14', '2020-11-21 04:29:55'),
(80, 'Ria', 'ria@gmail.com', '082789098224', '$2b$10$jTD2VwJn6/EEJuwIFg9h5umYw7fBANWm5lc9MN17zRofnDWLr3/gi', 2, '2020-11-21 05:57:08', '2020-11-21 05:57:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) UNSIGNED NOT NULL,
  `ac_id` int(11) UNSIGNED NOT NULL,
  `admin_created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `admin_updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`admin_id`, `ac_id`, `admin_created_at`, `admin_updated_at`) VALUES
(2, 80, '2020-11-21 05:57:08', '2020-11-21 05:57:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
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
  `cn_created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cn_updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`cn_id`, `ac_id`, `cn_company`, `cn_position`, `cn_fields`, `cn_city`, `cn_description`, `cn_instagram`, `cn_linkedin`, `cn_profile_pict`, `cn_created_at`, `cn_updated_at`) VALUES
(39, 71, 'Telkom Group', 'Manager', 'Information Technology', 'Jakarta', 'We have any project to finish', '@TelkomGroup', 'Telkom Group', 'cnProfilePict-1605925277404.png', '2020-11-21 02:21:17', '2020-11-21 02:21:17'),
(40, 72, 'Telkom Group', 'System Analyst', 'Information Technology', 'Malang', 'We have any project to finish', '@LineGroup', 'Line Group', 'cnProfilePict-1605925172088.png', '2020-11-21 02:19:32', '2020-11-21 02:19:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `engineer`
--

CREATE TABLE `engineer` (
  `en_id` int(11) UNSIGNED NOT NULL,
  `ac_id` int(11) UNSIGNED NOT NULL,
  `en_job_title` varchar(50) DEFAULT NULL,
  `en_job_type` enum('freelance','fulltime') DEFAULT NULL,
  `en_location` varchar(50) DEFAULT NULL,
  `en_description` text DEFAULT NULL,
  `en_profile_pict` text DEFAULT NULL,
  `en_created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `en_updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `engineer`
--

INSERT INTO `engineer` (`en_id`, `ac_id`, `en_job_title`, `en_job_type`, `en_location`, `en_description`, `en_profile_pict`, `en_created_at`, `en_updated_at`) VALUES
(26, 73, 'Android Developer', 'fulltime', 'Jakarta', 'I work with company', 'uploads\\enProfilePict-1605880838134.jpg', '2020-11-20 14:00:38', '2020-11-20 14:00:38'),
(27, 74, 'Software Developer', 'freelance', 'Surabaya', 'I work with my teams', 'enProfilePict-1605932255564.jpg', '2020-11-21 04:17:35', '2020-11-21 04:17:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `experience`
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
-- Dumping data untuk tabel `experience`
--

INSERT INTO `experience` (`ex_id`, `en_id`, `ex_position`, `ex_company`, `ex_start_date`, `ex_end_date`, `ex_description`) VALUES
(19, 26, 'UI Designer', 'AirBnB', '2019-09-01', '2020-10-11', 'make UI about Hotels apps'),
(20, 27, 'Software developer', 'BCA', '2019-09-01', '2020-10-11', 'build program that help BCA to work');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hire`
--

CREATE TABLE `hire` (
  `hr_id` int(11) UNSIGNED NOT NULL,
  `en_id` int(11) UNSIGNED NOT NULL,
  `pj_id` int(11) UNSIGNED NOT NULL,
  `hr_price` bigint(12) UNSIGNED DEFAULT NULL,
  `hr_message` text DEFAULT NULL,
  `hr_status` enum('wait','reject','approve') DEFAULT NULL,
  `hr_date_confirm` datetime DEFAULT NULL,
  `hr_created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `hire`
--

INSERT INTO `hire` (`hr_id`, `en_id`, `pj_id`, `hr_price`, `hr_message`, `hr_status`, `hr_date_confirm`, `hr_created_at`) VALUES
(9, 26, 14, 10000000, 'We\'re waiting for your response', NULL, NULL, '2020-11-21 04:42:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `portfolio`
--

CREATE TABLE `portfolio` (
  `pr_id` int(11) UNSIGNED NOT NULL,
  `en_id` int(11) UNSIGNED NOT NULL,
  `pr_app_name` varchar(50) DEFAULT NULL,
  `pr_description` text DEFAULT NULL,
  `pr_link_pub` varchar(100) DEFAULT NULL,
  `pr_link_repo` varchar(100) DEFAULT NULL,
  `pr_workplace` varchar(100) DEFAULT NULL,
  `pr_type` enum('aplikasi mobile','aplikasi web') DEFAULT NULL,
  `pr_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `portfolio`
--

INSERT INTO `portfolio` (`pr_id`, `en_id`, `pr_app_name`, `pr_description`, `pr_link_pub`, `pr_link_repo`, `pr_workplace`, `pr_type`, `pr_image`) VALUES
(8, 26, 'Mobile Banking in the worlds', 'System that help people to manager their money at Bank', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Bank at Indonesia', '', 'uploads\\portfolioImage-1605881047113.png'),
(11, 26, 'Mobile Banking in the worlds', 'System that help people to manager their money at Bank', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Bank at Indonesia', '', 'uploads\\portfolioImage-1605881111528.png'),
(13, 27, 'Mobile Banking', 'Sistem yang membantu nasabah mengelola data', 'https://www.codecademy.com/', 'https://github.com/ikrimaamanda?tab=repositories', 'Bank di Indonesia', 'aplikasi mobile', 'portfolioImage-1605932492999.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `project`
--

CREATE TABLE `project` (
  `pj_id` int(11) UNSIGNED NOT NULL,
  `cn_id` int(11) UNSIGNED NOT NULL,
  `pj_project_name` varchar(100) DEFAULT NULL,
  `pj_description` text DEFAULT NULL,
  `pj_deadline` date DEFAULT NULL,
  `pj_image` text DEFAULT NULL,
  `pj_created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `pj_updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `project`
--

INSERT INTO `project` (`pj_id`, `cn_id`, `pj_project_name`, `pj_description`, `pj_deadline`, `pj_image`, `pj_created_at`, `pj_updated_at`) VALUES
(9, 40, 'Build mobile legend', 'Build with 9 persons', '2020-11-16', 'projectImage', '2020-11-21 01:30:32', '2020-11-21 01:30:32'),
(10, 40, 'Build The Sims Apps', 'Build with 9 persons', '2020-11-16', 'projectImage-1605923780569.png', '2020-11-21 01:56:20', '2020-11-21 01:56:20'),
(11, 40, 'Build mobile legend', 'Build with 9 persons', '2020-11-16', 'projectImage', '2020-11-21 01:30:32', '2020-11-21 01:30:32'),
(12, 40, 'Build The Sims Apps', 'Build with 9 persons', '2020-11-16', 'projectImage', '2020-11-21 01:34:26', '2020-11-21 01:34:26'),
(13, 40, 'Build Valorant', 'Build with 3 persons', '2020-11-16', 'projectImage-1605923889560.png', '2020-11-21 01:58:09', '2020-11-21 01:58:09'),
(14, 39, 'Build AI apps', 'Build with 12 persons', '2020-11-16', 'projectImage-1605933694162.png', '2020-11-21 04:41:34', '2020-11-21 04:41:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `skill`
--

CREATE TABLE `skill` (
  `sk_id` int(11) UNSIGNED NOT NULL,
  `en_id` int(11) UNSIGNED NOT NULL,
  `sk_skill_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `skill`
--

INSERT INTO `skill` (`sk_id`, `en_id`, `sk_skill_name`) VALUES
(12, 26, 'Flutter'),
(13, 27, 'Javascript');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`ac_id`);

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `ac_id` (`ac_id`);

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`cn_id`),
  ADD KEY `ac_id` (`ac_id`);

--
-- Indeks untuk tabel `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`en_id`),
  ADD KEY `ac_id` (`ac_id`);

--
-- Indeks untuk tabel `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`ex_id`),
  ADD KEY `en_id` (`en_id`);

--
-- Indeks untuk tabel `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`hr_id`),
  ADD KEY `en_id` (`en_id`),
  ADD KEY `pj_id` (`pj_id`);

--
-- Indeks untuk tabel `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`pr_id`),
  ADD KEY `en_id` (`en_id`);

--
-- Indeks untuk tabel `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`pj_id`),
  ADD KEY `cn_id` (`cn_id`);

--
-- Indeks untuk tabel `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`sk_id`),
  ADD KEY `en_id` (`en_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `account`
--
ALTER TABLE `account`
  MODIFY `ac_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT untuk tabel `company`
--
ALTER TABLE `company`
  MODIFY `cn_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT untuk tabel `engineer`
--
ALTER TABLE `engineer`
  MODIFY `en_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `experience`
--
ALTER TABLE `experience`
  MODIFY `ex_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `hire`
--
ALTER TABLE `hire`
  MODIFY `hr_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `pr_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `project`
--
ALTER TABLE `project`
  MODIFY `pj_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `skill`
--
ALTER TABLE `skill`
  MODIFY `sk_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`ac_id`) REFERENCES `account` (`ac_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`ac_id`) REFERENCES `account` (`ac_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `engineer`
--
ALTER TABLE `engineer`
  ADD CONSTRAINT `engineer_ibfk_1` FOREIGN KEY (`ac_id`) REFERENCES `account` (`ac_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `hire`
--
ALTER TABLE `hire`
  ADD CONSTRAINT `hire_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hire_ibfk_2` FOREIGN KEY (`pj_id`) REFERENCES `project` (`pj_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `portfolio_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`cn_id`) REFERENCES `company` (`cn_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `skill`
--
ALTER TABLE `skill`
  ADD CONSTRAINT `skill_ibfk_1` FOREIGN KEY (`en_id`) REFERENCES `engineer` (`en_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
