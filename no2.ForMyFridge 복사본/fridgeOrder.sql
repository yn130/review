-- 1. 데이터베이스 생성
CREATE DATABASE fridge CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. 데이터베이스 목록
SHOW DATABASES;

-- 3. 데이터베이스 사용 선언
USE fridge;

-- 4. 데이터베이스 삭제 
DROP DATABASE fridge;


-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 테이블 삭제 

DROP TABLE UserFridgeMapping;
DROP TABLE user;
DROP TABLE fridgeTypeSection;
DROP TABLE fridgeItem;
DROP TABLE fridgeSection;
DROP TABLE fridge;
DROP TABLE fridgeType;
DROP TABLE ingredient;
DROP TABLE storageType;
DROP TABLE category;



-- 테이블 구조 보기
DESC user; 
DESC fridge;
DESC fridgeSection;
DESC fridgeType;
DESC fridgeTypeSection;
DESC ingredient;
DESC storageType;
DESC UserFridgeMapping; 

-- 테이블 데이터 조회
SELECT * FROM user; 
SELECT * FROM fridge;
SELECT * FROM fridgeSection;
SELECT * FROM fridgeType;
SELECT * FROM fridgeTypeSection;
SELECT * FROM ingredient;
SELECT * FROM storageType;
SELECT * FROM category;
SELECT * FROM UserFridgeMapping;
SELECT * FROM fridgeItem;


DESCRIBE user;