-- 데이터베이스 목록 확인
SHOW databases;

CREATE DATABASE codingon CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- codingon 데이터베이스 선택
USE codingon;

-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 user 테이블이 있다면 기존 테이블 지움
DROP TABLE IF EXISTS user;

-- TODO: user 데이터베이스 생성

create table user (
id INT PRIMARY KEY AUTO_INCREMENT,
userid varchar(20) not null,
name varchar(10) not null,
pw varchar(20) not null
);

-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
DESC user; 

-- user 테이블 데이터 조회
SELECT * FROM user;
SELECT * FROM user WHERE userid='sean' limit 1;

-- user 추가 
set global validate_password.policy=LOW;
create user 'user'@'%' identified by '12345678';
grant all privileges on *.* to 'user'@'%' with grant option;

drop table user;


