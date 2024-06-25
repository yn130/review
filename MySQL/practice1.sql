-- < 실습 >
-- 아래 조건을 만족하는 SQL 문을 작성해주세요.
/*
authors, books, orders 이름을 갖는 3개의 테이블을 생성합니다. 
authors 테이블에는 author_id(기본 키), first_name, last_name 및 email의 4개 열이 있습니다. 
책 테이블에는 book_id(기본 키), title, author_id(작가 테이블에서 author_id 열을 참조하는 외부 키), publication_date의 네 개의 열이 있습니다. 
주문 테이블에는 order_id(기본 키), book_id(책 테이블의 book_id 열을 참조하는 외부 키), customer_name 및 order_date의 네 개의 열이 있습니다.

books 테이블의 author_id 컬럼은 authors 테이블의 author_id와 관계를 맺는다. 
(즉, 작가 테이블에 존재하는 작가만이 책 테이블에 데이터가 추가될 수 있다.)

orders 테이블의 book_id 컬럼은 books 테이블의 book_id와 관계를 맺는다. 
(즉, 책 테이블에 존재하는 책만이 주문 테이블에 데이터가 추가될 수 있다.)

*3가지 테이블의 자세한 정보는 추가 이미지를 참고할 것
*/

CREATE DATABASE practice1 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE practice1;

CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE books (
    book_id INT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    author_id INT,
    publication_date DATE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE orders (
    order_id INT NOT NULL PRIMARY KEY,
    book_id INT,
    customer_name VARCHAR(50),
    order_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE CASCADE
);

DESC authors;
DESC books;
DESC orders;