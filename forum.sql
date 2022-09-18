/*
 Navicat Premium Data Transfer

 Source Server         : 本机
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : forum

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 18/09/2022 10:05:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for f_channel
-- ----------------------------
DROP TABLE IF EXISTS `f_channel`;
CREATE TABLE `f_channel` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of f_channel
-- ----------------------------
BEGIN;
INSERT INTO `f_channel` VALUES (1, '111111');
INSERT INTO `f_channel` VALUES (2, '1111112');
INSERT INTO `f_channel` VALUES (3, '11111123');
INSERT INTO `f_channel` VALUES (4, '11111124');
INSERT INTO `f_channel` VALUES (5, '111111241111');
INSERT INTO `f_channel` VALUES (6, 'dsfsd');
INSERT INTO `f_channel` VALUES (7, 'dsfsdsd');
INSERT INTO `f_channel` VALUES (8, '1111');
INSERT INTO `f_channel` VALUES (9, 'dsfsfsd');
INSERT INTO `f_channel` VALUES (10, '11111');
INSERT INTO `f_channel` VALUES (11, 'hsjkahd');
COMMIT;

-- ----------------------------
-- Table structure for f_message
-- ----------------------------
DROP TABLE IF EXISTS `f_message`;
CREATE TABLE `f_message` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `channel` bigint DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of f_message
-- ----------------------------
BEGIN;
INSERT INTO `f_message` VALUES (1, 'sad是多少', '大大是的啊', 3, NULL);
INSERT INTO `f_message` VALUES (2, 'sad是多少', '大大是的啊', 3, NULL);
INSERT INTO `f_message` VALUES (3, 'sad是多少', '大大是的啊', 3, NULL);
INSERT INTO `f_message` VALUES (4, 'sad是多少', '大大是的啊', 3, '2022-09-16 11:49:31');
INSERT INTO `f_message` VALUES (5, 'sad是多少', '大大是的啊', 3, '2022-09-16 12:39:47');
INSERT INTO `f_message` VALUES (6, 'sad是多少', '大大是的啊', 3, '2022-09-16 12:40:56');
INSERT INTO `f_message` VALUES (7, 'sad是多少', '大大是的啊', 8, '2022-09-16 16:01:38');
INSERT INTO `f_message` VALUES (8, 'sad是多少', '大大是的啊', 8, '2022-09-16 16:02:49');
INSERT INTO `f_message` VALUES (9, 'sad是多少', '大大是的啊', 3, '2022-09-16 16:03:41');
INSERT INTO `f_message` VALUES (10, 'sad是多少', '大大是的啊', 3, '2022-09-16 16:20:54');
INSERT INTO `f_message` VALUES (11, 'sad是多少', '大大是的啊', 3, '2022-09-16 09:54:03');
INSERT INTO `f_message` VALUES (12, 'sad是多少', '大大是的啊', 3, '2022-09-16 17:54:40');
INSERT INTO `f_message` VALUES (13, 'sad是多少', '大大是的啊', 3, '2022-09-16 17:55:42');
INSERT INTO `f_message` VALUES (14, 'sad是多少', '大大是的啊', 3, '2022-09-16 09:56:04');
INSERT INTO `f_message` VALUES (15, 'sad是多少', '大大是的啊', 3, '2022-09-16 17:56:52');
INSERT INTO `f_message` VALUES (16, 'sad是多少', '大大是的啊', 3, '2022-09-16 18:24:03');
INSERT INTO `f_message` VALUES (17, 'sad是多少', '大大是的啊', 3, '2022-09-16 10:32:30');
INSERT INTO `f_message` VALUES (18, '1111', 'hsdhlsadalsk', 3, '2022-09-17 10:15:52');
INSERT INTO `f_message` VALUES (19, '1111', 'hsdhlsadalsk', 3, '2022-09-17 10:35:58');
INSERT INTO `f_message` VALUES (20, 'dasdads', 'dadsadsa', 1, '2022-09-17 11:49:37');
INSERT INTO `f_message` VALUES (21, '1111', 'hsdhlsadalsk', 3, '2022-09-17 15:05:52');
INSERT INTO `f_message` VALUES (22, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:26:58');
INSERT INTO `f_message` VALUES (23, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:26:59');
INSERT INTO `f_message` VALUES (24, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:30:21');
INSERT INTO `f_message` VALUES (25, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:30:21');
INSERT INTO `f_message` VALUES (26, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:30:22');
INSERT INTO `f_message` VALUES (27, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:16');
INSERT INTO `f_message` VALUES (28, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:16');
INSERT INTO `f_message` VALUES (29, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:17');
INSERT INTO `f_message` VALUES (30, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:17');
INSERT INTO `f_message` VALUES (31, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:17');
INSERT INTO `f_message` VALUES (32, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:39');
INSERT INTO `f_message` VALUES (33, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:39');
INSERT INTO `f_message` VALUES (34, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:39');
INSERT INTO `f_message` VALUES (35, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:40');
INSERT INTO `f_message` VALUES (36, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:40');
INSERT INTO `f_message` VALUES (37, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:40');
INSERT INTO `f_message` VALUES (38, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:40');
INSERT INTO `f_message` VALUES (39, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:40');
INSERT INTO `f_message` VALUES (40, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:40');
INSERT INTO `f_message` VALUES (41, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:41');
INSERT INTO `f_message` VALUES (42, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:41');
INSERT INTO `f_message` VALUES (43, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:41');
INSERT INTO `f_message` VALUES (44, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:41');
INSERT INTO `f_message` VALUES (45, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:42');
INSERT INTO `f_message` VALUES (46, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:53:42');
INSERT INTO `f_message` VALUES (47, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:23');
INSERT INTO `f_message` VALUES (48, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:23');
INSERT INTO `f_message` VALUES (49, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:23');
INSERT INTO `f_message` VALUES (50, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:24');
INSERT INTO `f_message` VALUES (51, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:24');
INSERT INTO `f_message` VALUES (52, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:24');
INSERT INTO `f_message` VALUES (53, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:24');
INSERT INTO `f_message` VALUES (54, '1111', 'hsdhlsadalsk', 8, '2022-09-17 15:57:24');
INSERT INTO `f_message` VALUES (55, '1111', 'hsdhlsadalsk', 8, '2022-09-18 00:20:14');
INSERT INTO `f_message` VALUES (56, '1111', 'hsdhlsadalsk', 8, '2022-09-18 00:20:18');
INSERT INTO `f_message` VALUES (57, '1111', 'hsdhlsadalsk', 8, '2022-09-18 00:20:19');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
