create database registroCOVID2;
use registroCOVID2;

create table paciente(
    id_paciente int primary key auto_increment, 
    nombre varchar(30),
    edad int,
    genero varchar(30),
    seguridad_social VARCHAR(10),
    dolor_garganta boolean,
    tos_seca boolean,
    fiebre boolean,
    dif_respirar boolean,
    diabetes boolean,
    hipertension boolean,
    sobrepeso boolean
);


create table lugar(
    id_lugar int primary key,
    nombre_lugar varchar(45),
    descripcion_lugar varchar(45),
)