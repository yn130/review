CREATE DATABASE practice CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SHOW DATABASES;

USE practice;

DROP DATABASE practice; 

-- //////////////////////////////////

CREATE TABLE member (
	id VARCHAR(20) primary key,
    name VARCHAR(5) not null,
    age INT,
    gender VARCHAR(2) not null,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
    );
    
    DESC member;    
    
    
ALTER TABLE member MODIFY COLUMN id VARCHAR(10);
ALTER TABLE member DROP COLUMN age; 
ALTER TABLE member ADD  interest VARCHAR(100);


CREATE TABLE user (
		id VARCHAR(10) NOT NULL PRIMARY KEY,
        pw VARCHAR(20) NOT NULL,
        name VARCHAR(5) NOT NULL,
		gender ENUM('F', 'M', '') DEFAULT '',
		birthday DATE NOT NULL,
		age INT(3) NOT NULL DEFAULT 0
);

DESC user;

INSERT INTO user VALUES 
('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', '33'),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', '31'),
('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', '53'),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', '39'),
('widowmaker', '38ewifh3', '위도우','F', '1976-06-27', '47'),
('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', '22'),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24');

SELECT * FROM user;

-- 1. 모든 회원목록을 가져오는데, 이때 brithday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user ORDER BY birthday;

-- 2. 회원 목록 중 gender 컬럼의 값이 "m"인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
SELECT * FROM user WHERE gender ='m' ORDER BY name DESC;

-- 3. 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
SELECT id, name, birthday FROM USER WHERE birthday BETWEEN '1990-01-01' AND '1999-12-31';

-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday;

-- 5. gender 컬럼의 값이 "M"이고, 1970년대에 태어난 회원의 목록을 가져오시오.
SELECT * FROM user WHERE gender = 'M' and birthday >= '1970-01-01' and birthday <='1979-12-31';

-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
SELECT * FROM user ORDER BY age DESC LIMIT 3;

-- 7. 모든 회원의 목록 중 나이가 25이상 50이하인 회원의 목록을 출력하시오.
SELECT * FROM user WHERE age >= '25' and age <= '50';

-- 8. id 컬럼의 값이 hong1234인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
UPDATE user SET pw ='12345678' WHERE id = 'hong1234';

-- 9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오. 
DELETE FROM user WHERE id = 'jungkrat';

