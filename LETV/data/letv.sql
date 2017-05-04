SET NAMES 'utf8';
DROP DATABASE IF EXISTS letv;
CREATE DATABASE letv CHARSET=UTF8;
USE letv;

CREATE TABLE t_index_hot(
	hid int primary key auto_increment,
	pname varchar(20),
	price double(8,2),
	details varchar(10)
);
insert into t_index_hot values(null,'cool dual',999,'查看详情');
insert into t_index_hot values(null,'cool S1',2499,'查看详情');
insert into t_index_hot values(null,'乐S3',1099,'查看详情');
insert into t_index_hot values(null,'乐pro3',1799,'查看详情');
CREATE TABLE t_index_product(
	pid int primary key auto_increment,
	pic varchar(50),
	pname varchar(20),
	size1 varchar(50),
	size2 varchar(50),
	size3 varchar(50),
	size4 varchar(50),
	copy varchar(10),
	price double(8,2),
	btn varchar(10)
);
insert into t_index_product values(null,'imgs/show1.png','乐2','CDLA标准','10核X20处理器','16M+8M摄像头','5.5吋屏 全网通','¥',999,'立即购买');
CREATE TABLE t_index_product1(
	pid int primary key auto_increment,
	title varchar(50),
	pname varchar(20),
	content varchar(50),
	price double(8,2),
	pic varchar(50),
	btn varchar(10)
);
insert into t_index_product1 values(null,'热卖推荐','乐Max 1','生来孤独求败','1599','imgs/show2.png','立即购买');
insert into t_index_product1 values(null,'热卖推荐','乐Max 2','生来孤独求败','2499','imgs/show3.png','立即购买');



CREATE TABLE letv_user(
	uid int primary key auto_increment,
	uname varchar(32),
	upwd varchar(32)
);
insert into letv_user values(null,'liguoye','123456');
insert into letv_user values(null,'laowang','123456');

CREATE TABLE letv_cart(
	cid int primary key auto_increment,
	userId int
);
INSERT INTO letv_cart VALUES(null,1);
INSERT INTO letv_cart VALUES(null,2);
CREATE TABLE letv_cart_detail(
	did int primary key auto_increment,
	productId int,
	cartId int,
	count int
);

CREATE TABLE letv_details_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(32),
  price FLOAT(8,2),
  pname VARCHAR(64),
  type VARCHAR(20)
);
INSERT INTO letv_details_product VALUES(null,"imgs/205_1.jpg",1699.00,"乐视 1s 全网通 金色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_2.jpg",1399.00,"乐视 1s 全网通 白色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_3.jpg",1699.00,"乐视 1s 全网通 红色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_4.jpg",1599.00,"乐视 1s 全网通 灰色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_5.jpg",2699.00,"乐视 1s 全网通 黑色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_6.jpg",1699.00,"乐视 1s 全网通 金色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_7.jpg",1699.00,"乐视 1s 全网通 白色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_8.jpg",1899.00,"乐视 1s 全网通 红色 双卡双待 移动联通电信4G手机","LE_1");
INSERT INTO letv_details_product VALUES(null,"imgs/205_5.jpg",1699.00,"乐视 2s 全网通 灰色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_1.jpg",1599.00,"乐视 2s 全网通 灰色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_5.jpg",1699.00,"乐视 2s 全网通 灰色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_2.jpg",1699.00,"乐视 2s 全网通 金色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_3.jpg",1999.00,"乐视 2s 全网通 白色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_4.jpg",2699.00,"乐视 2s 全网通 红色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_5.jpg",1699.00,"乐视 2s 全网通 灰色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_6.jpg",2699.00,"乐视 2s 全网通 黑色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_7.jpg",1699.00,"乐视 2s 全网通 金色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_8.jpg",1699.00,"乐视 2s 全网通 白色 双卡双待 移动联通电信4G手机","LE_2");
INSERT INTO letv_details_product VALUES(null,"imgs/205_3.jpg",1699.00,"乐视 3s 全网通 黑色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_4.jpg",2699.00,"乐视 3s 全网通 金色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_6.jpg",2999.00,"乐视 3s 全网通 红色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_1.jpg",1699.00,"乐视 3s 全网通 红色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_2.jpg",1699.00,"乐视 3s 全网通 灰色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_3.jpg",1699.00,"乐视 3s 全网通 黑色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_4.jpg",2699.00,"乐视 3s 全网通 金色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_5.jpg",1699.00,"乐视 3s 全网通 白色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_7.jpg",1699.00,"乐视 3s 全网通 灰色 双卡双待 移动联通电信4G手机","LE_3");
INSERT INTO letv_details_product VALUES(null,"imgs/205_8.jpg",1399.00,"乐视 3s 全网通 黑色 双卡双待 移动联通电信4G手机","LE_3");

CREATE TABLE letv_member_movie(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(32),
  mname VARCHAR(32),
  director VARCHAR(32),
  mtime DATE,
  brief VARCHAR(100)
);
INSERT INTO letv_member_movie VALUES(null,'member_imgs/95.jpg','血战钢锯岭','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/111.jpg','奇幻空间','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/112.jpg','尸语者','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/113.jpg','魔弦传说','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/101.jpg','猪猪侠','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/100.jpg','28岁未成年','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/99.jpg','北极大冒险','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/98.jpg','但丁密码','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/97.jpg','孤芳不自赏','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');
INSERT INTO letv_member_movie VALUES(null,'member_imgs/96.jpg','我与你光年距离','梅儿.吉布森','2016-11-22','1945年,第二次世界大战接近尾声,作为邪恶轴心的重要成员日本,其嚣张态势已成强弩之末....');

