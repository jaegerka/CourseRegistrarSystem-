CREATE TABLE student (
	student_id INT NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	username VARCHAR(50) NOT NULL
);

INSERT INTO student (student_id, first_name, last_name, username) VALUES (100, 'Kaleigh', 'Jaeger', 'student01');
INSERT INTO student (student_id, first_name, last_name, username) VALUES (101, 'Danny', 'Trevino', 'student02');
INSERT INTO student (student_id, first_name, last_name, username) VALUES (102, 'Molly', 'Andrews', 'student03');
INSERT INTO student (student_id, first_name, last_name, username) VALUES (103, 'Matthew', 'Allen', 'student04');



CREATE TABLE course (
	code VARCHAR(50) NOT NULL,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(150) NOT NULL,
	professor INT NOT NULL, 
	capacity INT NOT NULL
);

INSERT INTO course (code, name, description, professor, capacity) VALUES ('CS-101', 'Computer Science 101', 'Computer Science introductory course', 1, 100);
INSERT INTO course (code, name, description, professor, capacity) VALUES ('CS-300', 'Advanced Principles of Computer Science', 'This is a more advanced class for computer science majors', 1, 75);
INSERT INTO course (code, name, description, professor, capacity) VALUES ('PSYC-101', 'Intro to Psychology', 'Psychology introductory course', 10, 250);
INSERT INTO course (code, name, description, professor, capacity) VALUES ('PSYC-400', 'Psychology Capstone', 'Capstone for Psychology Majors', 10, 20);