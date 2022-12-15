-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: test_book_store
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('phuong123','$2a$12$IxloYU/e0rxw35YpBsgWYejg15VwfNBT9rXCYHcLBTTuAvwqk7QqG');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_role`
--

DROP TABLE IF EXISTS `account_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_role` (
  `username` varchar(255) NOT NULL,
  `role_id` bigint NOT NULL,
  KEY `FKrs2s3m3039h0xt8d5yhwbuyam` (`role_id`),
  KEY `FK6maxca7k70niuh7p1mo6duxx9` (`username`),
  CONSTRAINT `FK6maxca7k70niuh7p1mo6duxx9` FOREIGN KEY (`username`) REFERENCES `account` (`username`),
  CONSTRAINT `FKrs2s3m3039h0xt8d5yhwbuyam` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_role`
--

LOCK TABLES `account_role` WRITE;
/*!40000 ALTER TABLE `account_role` DISABLE KEYS */;
INSERT INTO `account_role` VALUES ('phuong123',1),('phuong123',2);
/*!40000 ALTER TABLE `account_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` int DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `description` text,
  `img_url` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number_rating` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `total_pages` int DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `year_publish` datetime(6) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKam9riv8y6rjwkua1gapdfew4j` (`category_id`),
  CONSTRAINT `FKam9riv8y6rjwkua1gapdfew4j` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,10,' BS Lê Ngọc Anh Thy , Linh Phan','<div class=\"bookdetailblockcontent\">\n        <h1> Giới thiệu sách</h1>\n        <article>\n            <div id=\"messageView\" class=\"message-view \" tabindex=\"21\">&nbsp;</div>\n<p>“Như một lẽ tự nhiên và như bản năng, các loài động vật có vú khi sinh ra đã có sữa mẹ của chúng để bú trong những tháng sơ sinh trước khi chúng biết ăn. Loài người không phải là ngoại lệ. Tuy nhiên, do nhiều lý do như tâm lý hay bệnh lý của bà mẹ, sự quảng cáo (đôi khi không đúng sự thật) của nhiều hãng sữa, hay do nhiều nguồn thông tin sai lệch, mà nhiều bà mẹ ở Việt Nam đang rất hoang mang khi cho bé bú mẹ</p>\n<p>&nbsp;</p>\n<p>Với tâm huyết và kinh nghiệm của nhiều năm tư vấn cho các bà mẹ nuôi con bằng sữa mẹ, bác sĩ Anh Thy đã đúc kết những kiến thức quý báu về sữa mẹ để cho ra đời cuốn sách <em>Tận hưởng hành trinh nuôi con sữa mẹ</em> Với văn phong gần gũi và dễ hiểu cuốn sách này sẽ là hành trang không thể thiếu của bà mẹ trong việc mang lại cho bé yêu nguồn dinh dưỡng quý giá nhất trong những năm tháng đầu đời của bé, giúp bà mẹ tự tin thực hiện thiên chức của mình trong hành trình nuôi con bằng sữa mẹ\"</p>\n<p>BS NGUYỄN TRÍ ĐOÀN, Trưởng khoa Nhi phòng khám quốc tế Victoria Healthcare, tác giả cuốn Để con được ốm</p>\n<p>&nbsp;</p>\n<p>“Sữa mẹ đối với nhiều người rất dễ dàng có được, cho con bú mẹ thật đơn giản, nhưng cũng có người còn khó khăn, còn hoài nghi khi cho con bú sữa mẹ. Cuốn sách này sẽ cung cấp cho mọi người những kiến thức cơ bản về vai trò của sữa mẹ cũng như những tình huống khó khăn đối với những người mẹ khó thực hiện khi nuôi con bằng sữa mẹ</p>\n<p>BỘ TRƯƠNG HỮU KHÁNH, nguyên Trưởng khoa Nhiễm - Thần kinh Bệnh viện Nhi Đồng 1 TP HCM, tác giả cuốn <em>Hỏi bác sĩ nhi đồng</em></p>\n<p>&nbsp;</p>\n<p><strong>BS LÊ NGỌC ANH THY</strong> đã có hơn 10 năm kinh nghiệm hỗ trợ các mẹ sữa, từng là bác sĩ gây mê hồi sức tại các bệnh viện lớn ở TP Hồ Chí Minh. Năm 2010, chị sinh bé trai và nuôi bé bằng sữa mẹ. Chị bén duyên với nghề tư vấn sữa mẹ khi được người bạn cũ mời chia sẻ trên group Nuôi con bằng sữa mẹ trên Facebook. Sau đó, BS Anh Thy học chuyên sâu về sữa mẹ trong 2 năm và trở thành người đầu tiên tại Việt Nam lấy được chứng nhận Chuyên gia tư vấn sữa mẹ quốc tế IBCLC (International Board Certified Lactation Consultant) năm 2015. Cuối 2019, BS Anh Thy đến Trung tâm sữa mẹ quốc tế tại Toronto, Canada để học thêm nhiều kinh nghiệm thực tế.</p>\n<p><strong>LINH PHAN</strong>&nbsp;theo học lĩnh vực tâm lý học phát triển/tâm lý trẻ em và đang là thành viên của Hiệp hội Trị liệu Tâm thần dành cho gia đình tại Na Uy. Linh cũng đồng thời là một huấn luyện viên phụ huynh chuyên nghiệp (Certified Parent Coach) và là một tác giả sách. Linh hiện đang sống và làm việc cùng gia đình với hai con trai tại Na Uy</p>\n\n        </article>\n    </div>\n','http://static.nhanam.com.vn/thumb/0x230/crop/Books/Images/2022/11/15/CGKPM7QW.jpg','VietNam','TẬN HƯỞNG HÀNH TRÌNH NUÔI CON SỮA MẸ',5,105600,'Thế Giới',287,1.5,'2022-11-25 00:00:00.000000',1),(2,11,'Zihua Nguyễn','<div class=\"bookdetailblockcontent\">\n        <h1> Giới thiệu sách</h1>\n        <article>\n            <p>“Thời sinh viên, trong tôi, ý nghĩ trở thành vĩ nhân luôn thường trực.<br>Bill Gates, Steve Jobs, Mark Zuckerberg.<br>Đặc điểm chung của các vĩ nhân là họ luôn bỏ ngang đại học.<br>Suốt năm năm ngồi trên giảng đường, ý nghĩ “mình sẽ bỏ học” lóe lên trong đầu<br>tôi 226 lần. Nhưng rốt cuộc, tôi không đi theo tiếng gọi của các vĩ nhân. Tôi hoàn<br>thành 180 tín chỉ học phần. Tốt nghiệp đại học, cầm tấm bằng đỏ chót, rồi lao vào<br>đời.”<br>Những câu chuyện chân thực, hài hước, mang nhiều niềm vui xen lẫn những nỗi<br>ngậm ngùi của những cậu sinh viên nghèo sống trong Ký túc xá phòng 307.<br>Một cuốn sách dành tặng cho những ai đã-đang-và-sẽ là sinh viên.</p>\n\n        </article>\n    </div>','http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/11/14/C3F24YNQ.jpg','VietNam','KÝ TÚC XÁ PHÒNG 307',5,55200,'Hội nhà văn',176,1.5,'2019-11-29 00:00:00.000000',1),(3,12,'Trần Vàng Sao','<div class=\"bookdetailblockcontent\">\n        <h1> Giới thiệu sách</h1>\n        <article>\n            <p>\"Thơ của Trần Vàng Sao chính là cuộc đời ông. [...] Thơ ông hiện ra như chính áo quần ông, tóc tai ông, hơi thở ông, ánh mắt ông, giọng nói ông, cảm giác ông, mồ hôi ông, đau đớn ông, giận dữ ông, giày vò ông, tuyệt vọng ông, khát vọng ông... và nhịp đập trái tim ông là thứ kỳ diệu nhất gắn kết toàn bộ những gì thuộc về ông để vang lên thành thi ca. Bởi thế, thơ ông chân thực và mãnh liệt như máu chảy trong huyết quản ông.</p>\n<p>[...] Trần Vàng Sao là một thi sĩ chân chính đến trầm luân, Trần Vàng Sao là một người yêu nước đến đau đớn.\"</p>\n<p>- Nguyễn Quang Thiều - Phó chủ tịch Hội Nhà văn Việt Nam<br>Giám đốc, Tổng biên tập Nhà xuất bản Hội Nhà văn</p>\n\n        </article>\n    </div>','http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/9/4/DKQYFA75.jpg','VietNam','BÀI THƠ CỦA MỘT NGƯỜI YÊU NƯỚC MÌNH',4,104000,'Hội nhà văn',210,1.2,'2020-12-31 00:00:00.000000',1),(4,22,'Maz Evans','<div class=\"bookdetailblockcontent\">\n        <h1> Giới thiệu sách</h1>\n        <article>\n            <p><span data-sheets-value=\"{\" 1\":2,\"2\":\"phản=\"\" ứng=\"\" của=\"\" độc=\"\" giả=\"\" nhí=\"\" khi=\"\" đọc=\"\" cuốn=\"\" sách.\\r\\noliver=\"\" thorpe,=\"\" 10=\"\" tuổi=\"\" –=\"\" “mê=\"\" lắm!=\"\" không=\"\" thể=\"\" nào=\"\" đặt=\"\" xuống=\"\" được,=\"\" em=\"\" đã=\"\" nó=\"\" liền=\"\" tù=\"\" tì=\"\" trong=\"\" hai=\"\" ngày.=\"\" nghĩ=\"\" ai=\"\" mà=\"\" cầm=\"\" lên=\"\" cũng=\"\" thích=\"\" cho=\"\" xem.”\\r\\n\\r\\njack=\"\" horswill,=\"\" “em=\"\" thì=\"\" xin=\"\" chúc=\"\" mừng=\"\" maz=\"\" evans=\"\" -=\"\" cô=\"\" ấy=\"\" đưa=\"\" các=\"\" vị=\"\" thần=\"\" đến=\"\" với=\"\" đời=\"\" thực=\"\" như=\"\" những=\"\" anh=\"\" hùng=\"\" vậy.”\\r\\n\\r\\nharsh=\"\" budhdeo,=\"\" 9=\"\" “một=\"\" sách=\"\" nhân=\"\" vật=\"\" muôn=\"\" màu=\"\" và=\"\" chắp=\"\" cánh=\"\" trí=\"\" tưởng=\"\" tượng=\"\" trẻ=\"\" về=\"\" thế=\"\" giới=\"\" bất=\"\" tử.”\\r\\n\\r\\nalex=\"\" nicholson,=\"\" “sách=\"\" này=\"\" buồn=\"\" cười=\"\" lắm.=\"\" mời=\"\" quan=\"\" tâm=\"\" thoại=\"\" hy=\"\" lạp=\"\" hoặc=\"\" người=\"\" hãy=\"\" ngay!”\\r\\n\\r\\ncác=\"\" ra=\"\" rất=\"\" giống=\"\" con=\"\" người:=\"\" ghen=\"\" tuông,=\"\" nhạy=\"\" cảm,=\"\" bốc=\"\" đồng,=\"\" giận=\"\" dữ.=\"\" họ=\"\" chính=\"\" là=\"\" chúng=\"\" ta,=\"\" quyền=\"\" năng=\"\" thánh!\\r\\n\\r\\ncâu=\"\" chuyện=\"\" siêu=\"\" hài=\"\" hước=\"\" xoay=\"\" quanh=\"\" người.=\"\" một=\"\" cậu=\"\" bé=\"\" 12=\"\" tên=\"\" elliot,=\"\" gia=\"\" cảnh=\"\" khó=\"\" khăn,=\"\" mẹ=\"\" ốm=\"\" bệnh,=\"\" nhỏ=\"\" nhiều=\"\" việc=\"\" đau=\"\" đầu.=\"\" ngày=\"\" nọ=\"\" chòm=\"\" sao=\"\" đột=\"\" ngột=\"\" đáp=\"\" chuồng=\"\" bò=\"\" nhà=\"\" thay=\"\" đổi=\"\" cuộc=\"\" mãi=\"\" mãi.=\"\" vô=\"\" tình=\"\" giải=\"\" phóng=\"\" kẻ=\"\" phản=\"\" diện=\"\" ác,=\"\" đành=\"\" phải=\"\" cầu=\"\" sự=\"\" trợ=\"\" giúp=\"\" thần,=\"\" zeus,=\"\" aphrodite,=\"\" athena….=\"\" để=\"\" đuổi=\"\" theo=\"\" nguy=\"\" hiểm=\"\" kia.\\r\\n\\r\\ncuốn=\"\" chỉ=\"\" vui=\"\" nhộn=\"\" còn=\"\" cảm=\"\" động=\"\" ngờ,=\"\" đáng=\"\" nhớ.=\"\" elliot=\"\" dũng=\"\" thương=\"\" mẹ.=\"\" kỳ=\"\" quặc,=\"\" dễ=\"\" phạm=\"\" sai=\"\" lầm.=\"\" yếu=\"\" tố=\"\" gây=\"\" truyện=\"\" ở=\"\" chỗ=\"\" đều=\"\" sở=\"\" hữu=\"\" điểm=\"\" đen=\"\" tính=\"\" cách,=\"\" chẳng=\"\" khác=\"\" gì=\"\" trần=\"\" mắt=\"\" thịt.=\"\" zeus=\"\" lăng=\"\" nhăng,=\"\" hay=\"\" bội,=\"\" nữ=\"\" tuệ=\"\" athena=\"\" mọt=\"\" cứng=\"\" nhắc,=\"\" sắc=\"\" đẹp=\"\" aphrodite=\"\" hơi=\"\" mấy=\"\" nàng=\"\" tóc=\"\" vàng=\"\" hoe=\"\" hợm=\"\" hĩnh=\"\" nông=\"\" cạn…=\"\" nhưng=\"\" người,=\"\" có=\"\" lúc=\"\" lòng,=\"\" sáng,=\"\" hành=\"\" trình=\"\" khám=\"\" phá=\"\" cách=\"\" lẫn=\"\" người.\\r\\n\\r\\nbảo=\"\" sao,=\"\" tác=\"\" phẩm=\"\" đầu=\"\" tay=\"\" vừa=\"\" làm=\"\" bao=\"\" nhiêu=\"\" say=\"\" mê=\"\" ngây=\"\" ngất!=\"\" \\r\\n\\r\\ntÁc=\"\" giẢ:\\r\\nmaz=\"\" evans\\r\\nsự=\"\" nghiệp=\"\" viết=\"\" lách=\"\" bắt=\"\" bài=\"\" phê=\"\" bình=\"\" chương=\"\" truyền=\"\" hình=\"\" tờ=\"\" báo=\"\" nước.=\"\" sau=\"\" thành=\"\" lập=\"\" story=\"\" stew,=\"\" dạy=\"\" sáng=\"\" tạo=\"\" triển=\"\" khai=\"\" hoạt=\"\" trường=\"\" tiểu=\"\" học=\"\" lễ=\"\" hội=\"\" văn=\"\" trên=\"\" khắp=\"\" vương=\"\" quốc=\"\" anh.=\"\" hiện=\"\" sống=\"\" dorset=\"\" cùng=\"\" chồng=\"\" bốn=\"\" con.\\r\\n\\r\\ntác=\"\" cô,=\"\" thả=\"\" ra?=\"\" lọt=\"\" vào:\\r\\n-=\"\" danh=\"\" rút=\"\" gọn=\"\" thưởng=\"\" thiếu=\"\" nhi=\"\" waterstones=\"\" 2017\\r\\n-=\"\" dài=\"\" branford=\"\" boase=\"\" 2018\\r\\n-=\"\" đề=\"\" cử=\"\" cilip=\"\" carnegie=\"\" 2018\\r\\nai=\"\" tập=\"\" xê=\"\" ri.\\r\"}\"=\"\" data-sheets-userformat=\"{\" 2\":961,\"3\":{\"1\":0},\"9\":0,\"10\":0,\"11\":3,\"12\":0}\"=\"\">Phản ứng của độc giả nhí khi đọc cuốn sách. <br>Oliver Thorpe, 10 tuổi – “Mê lắm! Không thể nào đặt xuống được, em đã đọc nó liền tù tì trong hai ngày. Em nghĩ ai mà cầm lên cũng thích nó cho xem.” <br> <br>Jack Horswill, 10 tuổi – “Em thì em xin chúc mừng Maz Evans - cô ấy đưa các vị thần đến với đời thực như những anh hùng vậy.” <br> <br>Harsh Budhdeo, 9 tuổi – “Một cuốn sách với các nhân vật muôn màu và chắp cánh cho trí tưởng tượng của trẻ em về thế giới bất tử.” <br> <br>Alex Nicholson, 10 tuổi – “Sách này đọc buồn cười lắm. Xin mời ai quan tâm đến thần thoại Hy Lạp hoặc những người thích cười thì hãy đọc ngay!” <br> <br>Các vị thần Hy Lạp thực ra rất giống con người: ghen tuông, nhạy cảm, bốc đồng, giận dữ. Họ chính là chúng ta, với quyền năng thần thánh! <br> <br>Câu chuyện siêu hài hước này xoay quanh Thần và Người. Một cậu bé 12 tuổi tên Elliot, gia cảnh khó khăn, mẹ thì ốm bệnh, tuổi nhỏ mà nhiều việc đau đầu. Ngày nọ một chòm sao đột ngột đáp xuống chuồng bò nhà cậu và thay đổi cuộc đời cậu mãi mãi. Vô tình giải phóng một kẻ phản diện độc ác, cậu đành phải cầu đến sự trợ giúp của các vị thần, Zeus, Aphrodite, Athena…. để đuổi theo tên tù nhân nguy hiểm kia. <br> <br>Cuốn sách không chỉ vui nhộn mà còn cảm động bất ngờ, và nhân vật nào cũng đáng nhớ. Elliot rất dũng cảm và thương mẹ. Các vị thần Hy Lạp thì kỳ quặc, dễ phạm sai lầm. Yếu tố gây cười trong truyện là ở chỗ họ đều sở hữu những điểm đen trong tính cách, chẳng khác gì người trần mắt thịt. Zeus thì lăng nhăng, hay phản bội, Nữ thần trí tuệ Athena thì mọt sách và cứng nhắc, Nữ thần sắc đẹp Aphrodite thì hơi giống mấy cô nàng tóc vàng hoe hợm hĩnh nông cạn… Nhưng cũng như con người, họ đều có những lúc yếu lòng, những điểm sáng, và hành trình đuổi theo tên tù nhân nguy hiểm cũng là hành trình khám phá tính cách của Thần lẫn Người. <br> <br>Bảo sao, tác phẩm đầu tay vừa hài hước vừa cảm động này của Maz Evans đã làm cho bao nhiêu cô cậu say mê ngây ngất! <br> <br>TÁC GIẢ: <br>Maz Evans <br>Sự nghiệp viết lách của Maz bắt đầu với các bài phê bình chương trình truyền hình và các bài viết cho nhiều tờ báo trong nước. Sau này cô thành lập Story Stew, một chương trình dạy viết sáng tạo đã triển khai hoạt động ở các trường tiểu học và các lễ hội văn học trên khắp Vương quốc Anh. Maz hiện sống ở Dorset cùng chồng và bốn người con. <br> <br>Tác phẩm đầu tay của cô, Ai thả các thần ra? đã lọt vào: <br>- Danh sách rút gọn cho Giải thưởng Sách thiếu nhi Waterstones 2017 <br>- Danh sách dài cho Giải thưởng Branford Boase 2018 <br>- Danh sách đề cử cho Giải thưởng CILIP Carnegie 2018 <br>Ai thả các thần ra là tập đầu trong xê ri. </span></p>\n\n        </article>\n    </div>','http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2022/7/11/1B5GKXCF.jpg','Anh','AI THẢ CÁC THẦN RA?',5,143200,'Hội nhà văn',412,1.4,'2022-12-12 00:00:00.000000',2),(5,11,'Phạm Ngọc Điệp','<div class=\"bookdetailblockcontent\">\n        <h1> Giới thiệu sách</h1>\n        <article>\n            <p>SÁCH TÔ MÀU PHÁT TRIỂN NÃO BỘ&nbsp;<br>Dành cho bé 1-5 tuổi:</p>\n<p>Bố mẹ biết chứ, trẻ dưới 18 tháng đã có khả năng chuyển tải suy nghĩ và cảm xúc bằng hình ảnh có màu sắc. Tô màu giúp trẻ rèn kỹ năng điều khiển vận động của đôi tay, tăng khả năng quan sát, được sáng tạo và tưởng tượng một cách tự nhiên, được luyện khả năng tập trung và kiên trì, tăng khả năng thưởng thức cái đẹp trong cuộc sống. Với trẻ nhỏ tuổi, học là chơi và chơi là học. Tranh tô màu chính là những \"bài học\" có sức mạnh to lớn với trẻ, bố mẹ ạ!</p>\n\n        </article>\n    </div>','http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2022/9/9/WVTGDXMZ.jpg','VietNam','TÔ MÀU PHÁT TRIỂN NÃO BỘ CHO BÉ 1-5 TUỔI TẬP 5',3,12800,'Dân Trí',20,1.5,'2022-09-09 00:00:00.000000',3),(6,2,'Phan Cuồng','<div class=\"bookdetailblockcontent\">\n        <h1> Giới thiệu sách</h1>\n        <article>\n            <p>Năm Cảnh Hưng thứ bốn mươi ba, huyện Cốc Dương, trấn Sơn Tây, đêm rằm tháng Bảy. Một gã phù thủy đang lập trận thu nạp âm binh giữa bãi chôn người. Phạm Đình Quyết, dòng dõi của một gia đình chín đời làm nghề khâm liệm đã vô tình chứng kiến cảnh tượng kinh dị này. Từ đây, hắn bắt đầu bước chân vào một thế giới chưa từng biết. Hắn dần dần khám phá ra bí mật của gia đình mình. Và thân phận thực sự của hắn, một Lạc Vu Điện Súy của Trấn Quốc Hội, nơi tập hợp những phù thủy cao tay, những nhà huyền thuật xuất sắc đang âm thầm bảo vệ Đông Kinh trước sự tấn công của giáo phái Hàng Long tà đạo từ ngoại bang.</p>\n<p>Một câu chuyện về thế giới của phù thủy, vong hồn, bùa ngải, huyền thuật, tà thuật. Kinh dị, huyền bí, li kỳ, nhưng cũng đầy hào sảng.</p>\n<p>&nbsp;</p>\n\n        </article>\n    </div>','http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2019/5/9/7YYWZJ3H.jpg','VietNam','ĐẠI NAM DỊ TRUYỆN (TB 2019)',2,92000,'Hội nhà văn',396,1.5,'2019-05-23 00:00:00.000000',1),(7,6,' A.G. Riddle','<div <div class=\"bookdetailblockcontent\">\n        <h1> Giới thiệu sách</h1>\n        <article>\n            <p>Tại Marbella, Tây Ban Nha, Tiến sĩ Kate Warner tỉnh dậy trước thực tại kinh hoàng: Loài người đang đứng trên bờ vực tuyệt chủng. Một đại dịch chưa từng có đang càn quét địa cầu. Gần nửa tỷ người đã chết - còn những người sống sót thì phải chịu một trong hai số phận: hoặc thoái hóa, hoặc tiến hóa thần tốc.</p>\n<p>Khi thế giới chìm vào hỗn mang, những giải pháp cực đoan được đưa ra. Các nước phát triển sản xuất hàng loạt một phương thuốc thần kỳ: Phong Lan. Phong Lan kiềm soát các triệu chứng và ngăn người bệnh tử vong, song không trị được bệnh. Hội Immari lại có một cách tiếp cận khác, ấy là không làm gì cả. Cứ để dịch bệnh tiêu diệt những ai nó chọn.</p>\n<p>Với hai thế lực đối đầu nhau, hy vọng cuối cùng của nhân loại là phải tìm ra thuốc giải. Kate là người duy nhất nằm giữ chìa khóa để vén màn bí ẩn vây quanh <em>Dịch bệnh Atlantis</em>. Đào sâu vào quá khứ, cô sẽ sớm phát hiện lịch sử tiến hóa của loài người không giống những gì chúng ta hằng tưởng.</p>\n<p>Một đại dịch đã được ấp ủ 70.000 năm.</p>\n<p>Sẽ thay đổi số mệnh loài người... mãi mãi.</p>\n\n        </article>\n    </div>','http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2022/3/16/1YF9HFCE.jpg','Mỹ','DỊCH BỆNH ATLANTIS',4,156000,'Hội nhà văn',496,1.5,'2022-03-21 00:00:00.000000',2);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_order`
--

DROP TABLE IF EXISTS `book_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_delivery` date DEFAULT NULL,
  `date_order` date DEFAULT NULL,
  `date_receipt` date DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg9dfl5a6p0v1s3infwn0njds9` (`customer_id`),
  CONSTRAINT `FKg9dfl5a6p0v1s3infwn0njds9` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_order`
--

LOCK TABLES `book_order` WRITE;
/*!40000 ALTER TABLE `book_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `book_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdebwvad6pp1ekiqy5jtixqbaj` (`customer_id`),
  CONSTRAINT `FKdebwvad6pp1ekiqy5jtixqbaj` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `book_id` bigint NOT NULL,
  `cart_id` bigint NOT NULL,
  `date_add` datetime(6) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `book_id_list` bigint DEFAULT NULL,
  PRIMARY KEY (`book_id`,`cart_id`),
  KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  KEY `FK2k9bac21fpcsduu1didauv419` (`book_id_list`),
  CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `FK2k9bac21fpcsduu1didauv419` FOREIGN KEY (`book_id_list`) REFERENCES `book` (`id`),
  CONSTRAINT `FKis5hg85qbs5d91etr4mvd4tx6` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (1,1,'2022-12-12 00:00:00.000000',2,NULL),(3,1,'2022-12-15 22:29:35.176000',1,NULL),(6,1,'2022-12-15 22:23:54.876000',1,NULL);
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Văn Học Việt Nam'),(2,'Văn Học Nước Ngoài'),(3,'Thiếu nhi'),(4,'Thời sự - Chính trị');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `birthday` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` bit(1) NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsn7i4emc8fm44n66ge5ulpfio` (`username`),
  CONSTRAINT `FKsn7i4emc8fm44n66ge5ulpfio` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'K112 abc','1992-10-10 00:00:00.000000','phuong.misadng@gmail.com',_binary '\0','test','Nguyen Phuong','09051241','phuong123');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `amount` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `order_id` bigint NOT NULL,
  `book_id` bigint NOT NULL,
  PRIMARY KEY (`book_id`,`order_id`),
  KEY `FKianqbcay3fv1gjrqimfiwd1wa` (`order_id`),
  CONSTRAINT `FK3aceepmpjwpo8pdn7gmjdfckq` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `FKianqbcay3fv1gjrqimfiwd1wa` FOREIGN KEY (`order_id`) REFERENCES `book_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ADMIN'),(2,'USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 22:30:51
