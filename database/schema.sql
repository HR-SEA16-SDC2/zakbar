DROP DATABASE IF EXISTS qanda;

CREATE DATABASE qanda;

USE qanda;

CREATE TABLE questions (
  question_id SERIAL NOT NULL,
  product_id INTEGER NOT NULL,
  body VARCHAR (250) NOT NULL,
  date_written DATE NOT NULL,
  asker_name VARCHAR(250) NOT NULL,
  asker_email VARCHAR(250) NOT NULL,
  reported BOOLEAN,
  helpful INTEGER,
  PRIMARY KEY (question_id),
  UNIQUE(question_id)
);

CREATE TABLE answers (
  answer_id  SERIAL NOT NULL,
  question_id INTEGER NOT NULL,
  body VARCHAR (250) NOT NULL,
  date_written DATE NOT NULL,
  answerer_name VARCHAR(250) NOT NULL,
  answerer_email VARCHAR(250) NOT NULL,
  reported BOOLEAN,
  helpful INTEGER,
  PRIMARY KEY (answer_id),
  FOREIGN KEY (question_id) REFERENCES questions(question_id),
  UNIQUE(answer_id)
);

CREATE TABLE photos (
  photo_id  SERIAL NOT NULL,
  answer_id INTEGER NOT NULL,
  url VARCHAR (2048) NOT NULL,
  PRIMARY KEY (photo_id),
  FOREIGN KEY (answer_id) REFERENCES answers(answer_id),
  UNIQUE(photo_id)
);