CREATE DATABASE VidaSustentavel;

USE VidaSustentavel;

CREATE TABLE usuario ( 
id INT PRIMARY KEY auto_increment NOT NULL,
nome VARCHAR(50) NOT NULL, 
telefone VARCHAR(20) NOT NULL, 
email VARCHAR(255) NOT NULL, 
documento VARCHAR(14) NOT NULL, 
valor DECIMAL(8,2) NOT NULL, 
formaPagamento ENUM ("pix", "boleto", "cartao") NOT NULL
);