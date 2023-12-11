create database if not exists electron_crud;

use electron_crud;

create table mahasiswa(
mNIM int not null,
mFName varchar(255) not null,
mLName varchar(255),
mSemester int not null,
mNoWa varchar(20),
primary key (mNIM)
);

create table prodi(
pID int not null auto_increment,
pName varchar(255) not null,
mNIM int not null,
primary key (pID),
foreign key (mNIM) references mahasiswa (mNIM)
);

insert into mahasiswa(mNIM, mFName, mLName, mSemester, mNoWA) values
(72231001, 'Puspita', 'Sari', 1, '08128212821'),
(72231002, 'Naga', 'Puspa', 2, '08772812861'),
(72231003, 'Zainal', 'Abidin', 2, '08770002861'),
(72231004, 'Tania', 'Puspita', 5, '08252812861'),
(72231005, 'Adi', 'Nugroho', 6, '08568271281');

insert into prodi(pName, mNIM) values 
('Sistem Informasi', 72231001),
('Sistem Informasi', 72231002),
('Sistem Informasi', 72231003),
('Sistem Informasi', 72231004),
('Sistem Informasi', 72231005);

select mahasiswa.mNIM, mahasiswa.mFName, mahasiswa.mLName, prodi.pName, mahasiswa.mSemester, mahasiswa.mNoWa
from mahasiswa
left join prodi
on mahasiswa.mNIM = prodi.mNIM
;