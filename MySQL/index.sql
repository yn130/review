CREATE DATABASE hospital CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hospital;

CREATE TABLE Patient (
	patient_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

CREATE TABLE Doctor (
	doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    specialty VARCHAR(100) NOT NULL
);

CREATE TABLE Appointment (
	appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL, 
    doctor_id INT NOT NULL,
    appointment_Date DATE NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Diagnosis (
diagnosis_code INT AUTO_INCREMENT PRIMARY KEY,
diagnosis_name VARCHAR(100) NOT NULL,
description TEXT
);

CREATE TABLE Diagnosis_record (
appointment_id INT NOT NULL,
diagnosis_code INT NOT NULL,
FOREIGN KEY (appointment_id) REFERENCES appointment(appointment_id) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (diagnosis_code) REFERENCES diagnosis(diagnosis_code) ON UPDATE CASCADE ON DELETE CASCADE,
PRIMARY KEY (appointment_id, diagnosis_code)
);

desc Diagnosis_record;
desc Diagnosis;
desc Appointment;
desc Doctor;
desc Patient;


INSERT INTO Patient VALUES 
	(1, '김철수', '1990-05-15'),
	(2, '박영희', '1985-11-22'),
	(3, '이지원', '1998-03-08'),
	(4, '최민기', '1977-09-25'),
	(5, '한지영', '1992-07-01');

INSERT INTO Doctor VALUES 
	(1, '김의사', '내과'),
	(2, '박의사', '외과'),
	(3, '이의사', '소아과'),
	(4, '최의사', '정형외과'),
	(5, '한의사', '피부과'); 
    
INSERT INTO Appointment VALUES 
	(null, '1', '4', '2024-06-01'),
	(null, '2', '5', '2024-06-01'),
	(null, '3', '2', '2024-06-02'),
	(null, '4', '3', '2024-06-03'),
	(null, '5', '1', '2024-06-04'); 
    
INSERT INTO Diagnosis VALUES 
	(null, '장염', '복통, 설사 증상'),
	(null, '하지정맥류', '하지의 표재 정맥 이상'),
	(null, '알레르기', '아토피'),
	(null, '골절', '뼈에 금이 가거나 부러짐'),
    (null, '철과상', '피부 표면 외상');

INSERT INTO Diagnosis_record VALUES 
	('1','4'),
    ('2','5'),
    ('3','2'),
    ('4','3'),
    ('5','1');

SELECT * FROM Patient;
SELECT * FROM Doctor;
SELECT * FROM Appointment;
SELECT * FROM Diagnosis;
SELECT * FROM Diagnosis_record;

-- 1. 모든 환자의 이름과 생년월일을 조회하시오.
SELECT * FROM Patient;

-- 2. 전공이 '내과'인 의사의 이름을 조회하시오.
SELECT name FROM Doctor WHERE specialty = '내과';

-- 3. 2024년 6월 1일에 진료받은 환자의 이름과 의사 이름을 조회하시오.
SELECT P.name AS Patient_name, D.name AS Dotor_name
	FROM Appointment A
	JOIN Patient P ON A.patient_id = P.patient_id
    JOIN Doctor D ON A.doctor_id = D.doctor_id
    WHERE A.appointment_Date = '2024-06-01';

-- 4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자를 조회하시오.
SELECT P.name AS Patient_name, A.appointment_Date, D.diagnosis_name
	FROM Diagnosis_record R
	JOIN Appointment A ON R.appointment_id = A.appointment_id
	JOIN Diagnosis D ON R.diagnosis_code = D.diagnosis_code
	JOIN Patient P ON A.Patient_id = P.Patient_id
	WHERE D.diagnosis_name = '골절';

-- 5. 각 의사가 진료한 환자 수를 조회하시오.
SELECT D.name AS Doctor_name, COUNT(A.patient_id) AS number_of_patients
	FROM Doctor D
    LEFT JOIN Appointment A on D.doctor_id = A.doctor_id
	GROUP BY D.name;
    

-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
SELECT P.name AS Patient_name, A.appointment_Date
	FROM Appointment A
    JOIN Patient P ON A.patient_id = P.patient_id
    ORDER by appointment_Date desc
    limit 1;
    
    