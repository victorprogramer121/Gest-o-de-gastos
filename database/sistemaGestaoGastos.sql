    create database SistemaGestaoGastos;

    use SistemaGestaoGastos;

    create table Usuario(
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL
    )


    create table Categoria(
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(150) NOT NULL
    )

    create table Gastos(
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(150) NOT NULL,
        dataGasto TIMESTAMP NOT NULL,
        valor DECIMAL(10,2) NOT NULL CHECK (valor>0),
        idCategoria BIGINT, 
        FOREIGN KEY(idCategoria) REFERENCES Categoria(id) ON DELETE CASCADE
    )

    -- create table Fatura{
    --     id BIGINT AUTO_INCREMENT PRIMARY KEY,
    --     valorFatura INT NOT NULL,
    --     mesFatura 
    -- }
