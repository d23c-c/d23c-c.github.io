PRAGMA foreign_keys = ON;
CREATE TABLE students (student_id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE);
CREATE TABLE courses (course_id INTEGER PRIMARY KEY, title TEXT NOT NULL, credits INTEGER NOT NULL CHECK (credits BETWEEN 1 AND 4));
CREATE TABLE enrollments (student_id INTEGER NOT NULL, course_id INTEGER NOT NULL, grade INTEGER, PRIMARY KEY(student_id,course_id), FOREIGN KEY(student_id) REFERENCES students(student_id), FOREIGN KEY(course_id) REFERENCES courses(course_id));
INSERT INTO students VALUES (1,'Lina','lina@example.invalid'),(2,'Noah','noah@example.invalid'),(3,'Mia',NULL);
INSERT INTO courses VALUES (10,'C++',3),(20,'SQL',2);
INSERT INTO enrollments VALUES (1,10,85),(1,20,95),(2,10,70);
