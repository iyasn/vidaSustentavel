DROP database IF EXISTS VidaSustentavel;

CREATE DATABASE VidaSustentavel;

USE VidaSustentavel;

CREATE TABLE usuario ( 
id INT PRIMARY KEY auto_increment NOT NULL,
nome VARCHAR(50) NOT NULL, 
telefone VARCHAR(20) NOT NULL, 
email VARCHAR(255) NOT NULL, 
documento VARCHAR(14) NOT NULL, 
valor DECIMAL(8,2) NOT NULL, 
formaPagamento ENUM ("pix", "boleto", "cartao") NOT NULL,
ongDesejada ENUM ("CanteirosColetivos", "CostaBrasilis", "Sustentarte", "InstitutoSocioambiental", "WWFBrasil", "InstitutoTerra") NOT NULL
);

select *
From usuario;

CREATE TABLE ong ( 
id INT PRIMARY KEY auto_increment NOT NULL,
nome VARCHAR(50) NOT NULL, 
documento VARCHAR(14) NOT NULL,
telefone VARCHAR(20) NOT NULL,
endereco VARCHAR(50) NOT NULL,
cep VARCHAR(8) NOT NULL, 
cidade VARCHAR(50) NOT NULL,
email VARCHAR(255) NOT NULL,
capa VARCHAR(255),
mensagem TEXT
);

select *
From ong;

CREATE TABLE contato ( 
id INT PRIMARY KEY auto_increment NOT NULL,
nome VARCHAR(50) NOT NULL, 
email VARCHAR(255) NOT NULL,
mensagem TEXT
);

select *
From contato;

INSERT INTO ong
VALUES ('1', 'Canteiros Coletivos', '02.287.348/0001-22', '3883-4543', 'R. Marujos do Brasil, 02', '40040-485', 'Tororo, Salvador - BA', 'contato@canteiroscoletivos.com.br', 'ong11.jpg', 'É uma iniciativa cidadã, autônoma e apartidária de recuperação de praças e canteiros abandonados da cidade de Salvador.');

INSERT INTO ong
VALUES ('2', 'Costa Brasilis', '12.835.765/0001-23', '(11) 3091-6594', 'Rua Emiliano Cardoso de Mello, 46', '05360-000', 'Vila Butantã, São Paulo - SP', 'contato@costabrasilis.org.br', 'ong22.jpg', 'Integra o desenvolvimento econômico com a preservação do patrimônio natural, social e cultural da região costeira, através de um plano integrado de ações estratégicas, visando a preservação ambiental e a transformação social.');

INSERT INTO ong
VALUES ('3', 'Sustentarte', '24.123.798/0001-33', '(21) 98055-5523', 'Rua Conde de Bonfim, 488', '20520-053', 'Tijuca, Rio de Janeiro - RJ', 'contato@sustentarte.org.br', 'ong33.jpg', 'Desenvolve projetos de educação ambiental continuada em escolas públicas e privadas da educação infantil ao ensino médio, usando permacultura, bioconstrução, cultivo de hortas e mudas nativas, dinâmicas corporais e cantigas.');

INSERT INTO ong
VALUES ('4', 'Instituto Socioambiental (ISA)', '33.801.222/0001-22', '(11) 3515-8900', 'SEDE: Praça Dom José Gaspar, 134 - 12 andar', '01047-912', 'República, São Paulo - SP', 'contato@costabrasilis.org.br', 'ong44.jpg', 'O Instituto Socioambiental é uma organização sem fins lucrativos que atua na defesa dos direitos socioambientais e na promoção do desenvolvimento sustentável.');

INSERT INTO ong
VALUES ('5', 'WWF-Brasil', '24.202.222/0001-21', '+55 (61) 3364-7400', 'SGCV lote 15, S/N Salas 319 e 421', '71.215-650', ' Brasília (DF)', 'comunicacao@wwf.org.br', 'ong5.jpg', 'O WWF-Brasil é parte de uma das maiores redes independentes de conservação do mundo, trabalhando para proteger a biodiversidade e promover o uso sustentável dos recursos naturais.');

INSERT INTO ong
VALUES ('6', 'Instituto Terra', '66.433.333/0001-33', '(33) 3267-2025', 'R. José Dias de Oliveira', '35200-000', 'Aimorés, MG', 'empresaamiga@institutoterra.org', 'ong6.jpg', 'O Instituto Terra é uma organização dedicada à recuperação de áreas degradadas e à promoção da educação ambiental. O instituto busca a restauração de ecossistemas e o fortalecimento da relação harmoniosa entre ser humano e natureza.');

