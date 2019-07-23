/*
 Navicat Premium Data Transfer

 Source Server         : localMysql
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : bigb

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 19/07/2019 01:51:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `ID` int(255) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `commentID` int(255) NOT NULL COMMENT '评论唯一ID',
  `projectID` int(255) NOT NULL COMMENT '所属作品ID',
  `userID` int(255) NULL DEFAULT NULL COMMENT '发送者的ID',
  `time` datetime(0) NULL DEFAULT NULL COMMENT '评论的时间',
  `platform` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '设备平台',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '评论的内容',
  `thumbup` int(255) NULL DEFAULT NULL COMMENT '点赞数',
  `subComID` int(255) NULL DEFAULT NULL COMMENT '再评论ID',
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `ID`(`ID`) USING BTREE,
  INDEX `commentID`(`commentID`) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`commentID`) REFERENCES `comment` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for danmu
-- ----------------------------
DROP TABLE IF EXISTS `danmu`;
CREATE TABLE `danmu`  (
  `ID` int(255) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `danmuID` int(255) NOT NULL COMMENT '弹幕唯一ID？是否需要？',
  `projectID` int(255) NOT NULL COMMENT '所属作品的ID',
  `userID` int(255) NOT NULL COMMENT '发送者的ID',
  `sendTime` datetime(0) NULL DEFAULT NULL COMMENT '发送的时间',
  `appearTime` datetime(0) NULL DEFAULT NULL COMMENT '弹幕出现的时间',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '内容',
  `color` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用十六进制表示的颜色',
  `size` int(11) NULL DEFAULT NULL COMMENT '弹幕字体大小',
  `showMethod` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '弹幕出现的方式',
  PRIMARY KEY (`ID`, `danmuID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow`  (
  `ID` int(255) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `masterID` int(10) NOT NULL COMMENT '所属masterID',
  `upID` int(11) NULL DEFAULT NULL COMMENT '关注的up主ID',
  `upname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'up主的名字',
  `upbigpic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'up主背景图片地址',
  `uppicsrc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'up主头像图片地址',
  `time` datetime(0) NULL DEFAULT NULL COMMENT '关注的时间',
  `classify` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '对up主的分类',
  `followers` int(255) NULL DEFAULT NULL COMMENT 'up主的粉丝数量',
  `followed` int(255) NULL DEFAULT NULL COMMENT 'up主关注的人数',
  `upsign` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'up主的个性签名',
  `subfollow` bit(1) NULL DEFAULT NULL COMMENT '是否互粉',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`  (
  `ID` int(11) NOT NULL COMMENT '作品唯一ID',
  `classify` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '作品类别',
  `watched` int(255) NULL DEFAULT NULL COMMENT '浏览量',
  `thumbups` int(255) NULL DEFAULT NULL COMMENT '点赞数',
  `comments` int(255) NULL DEFAULT NULL COMMENT '评论数',
  `stars` int(255) NULL DEFAULT NULL COMMENT '收藏数',
  `time` datetime(0) NOT NULL COMMENT '发表时间',
  `danmus` int(255) NULL DEFAULT NULL COMMENT '弹幕数',
  `danmuID` int(255) NOT NULL COMMENT '弹幕列表ID',
  `commentID` int(255) NOT NULL COMMENT '评论列表ID',
  `masterID` int(10) NOT NULL COMMENT '作品主ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for subscriber
-- ----------------------------
DROP TABLE IF EXISTS `subscriber`;
CREATE TABLE `subscriber`  (
  `ID` int(255) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `masterID` int(10) NOT NULL COMMENT '所属的masterID',
  `subscriberID` int(10) NOT NULL COMMENT '粉丝的ID',
  `picsrc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '粉丝头像的src',
  `subtime` datetime(0) NULL DEFAULT NULL COMMENT '关注的时间',
  `subname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '粉丝的名字',
  `subsign` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '粉丝的个性签名',
  `subfollow` bit(1) NULL DEFAULT NULL COMMENT '是否互粉',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户唯一ID',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称',
  `sex` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户性别',
  `age` int(3) NULL DEFAULT NULL COMMENT '用户年龄',
  `phone` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户电话',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户邮箱',
  `signTime` datetime(0) NOT NULL COMMENT '用户加入时间',
  `exp` int(255) UNSIGNED ZEROFILL NULL DEFAULT NULL COMMENT '用户经验值',
  `class` int(255) UNSIGNED ZEROFILL NOT NULL COMMENT '用户级数',
  `sign` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '个性签名',
  `picsrc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像存储位置',
  `projectID` int(255) NULL DEFAULT NULL COMMENT '作品列表ID',
  `commentID` int(255) NULL DEFAULT NULL COMMENT '评论列表ID',
  `whatchedID` int(255) NULL DEFAULT NULL COMMENT '观看作品ID',
  `subscriberID` int(255) NULL DEFAULT NULL COMMENT '粉丝列表ID',
  `followID` int(255) NULL DEFAULT NULL COMMENT '关注列表ID',
  `pwd` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'long',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
