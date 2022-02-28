<?php
/**
  * Данный скрипт принадлежит группе vk.com/vkbotrust
  * Данный скрипт предоставляется в существующей форме,
  * "как есть", без каких бы то ни было явных или
  * подразумеваемых гарантий, разработчик не несет
  * ответственность в случае его неправильного использования.
 */
 
// --- НАСТРОЙКИ ------------
//VK
// Токен
$access_token = 'token';
// ID группы
$group_id = 'groupid';

// Настройки обложки
// Путь к файлу обложки
$img = 'pic.jpg';
// Шрифт
$font = "./arial.ttf";
// Размер шрифта
$fsize = 24;

// Настройки топ игроков
// Размер текста
$tpfsize = 24;
// Положение иконки топ фармера
$tfarmerx = 600; //x
$tfarmery = 300; //y
// Надпись топ фармера
$tfarmtextx = 600; //x
$tfarmtexty = 290; //y
// Ник топ фармера
$tfarmnickx = 670; //x
$tfarmnicky = 364; //y
// Положение иконки топ киллера
$tkillerx = 600; //x
$tkillery = 180; //y
// Надпись топ киллер
$tkilltextx = 600; //x
$tkilltexty = 170; //y
// Ник топ киллера
$tkillnickx = 670; //x
$tkillnicky = 244; //y
// Положение иконки топ рейдера
$traiderx = 600; //x
$traidery = 60; //y
// Надпись топ рейдер
$traidtextx = 600; //x
$traidtexty = 50; //y
// Ник топ рейдера
$traidnickx = 670; //x
$traidnicky = 124; //y


// --- РИСОВАНИЕ ---------------------
$im = @imagecreatefromjpeg($img);
$fcolor = imagecolorallocate($im, 255, 255, 255); //белый шрифт

if(isset($_GET["t7"])){
	$text = $_GET["t7"];
	imagettftext($im, $fsize, 0, 80, 70, $fcolor, $font, $text);
}

if(isset($_GET["t6"])){
	$text = $_GET["t6"];
	imagettftext($im, $fsize, 0, 80, 120, $fcolor, $font, $text);
}

if(isset($_GET["t5"])){
	$text = $_GET["t5"];
	imagettftext($im, $fsize, 0, 80, 170, $fcolor, $font, $text);
}

if(isset($_GET["t4"])){
	$text = $_GET["t4"];
	imagettftext($im, $fsize, 0, 80, 220, $fcolor, $font, $text);
}

if(isset($_GET["t3"])){
	$text = $_GET["t3"];
	imagettftext($im, $fsize, 0, 80, 270, $fcolor, $font, $text);
}

if(isset($_GET["t2"])){
	$text = $_GET["t2"];
	imagettftext($im, $fsize, 0, 80, 320, $fcolor, $font, $text);
}

if(isset($_GET["t1"])){
	$text = $_GET["t1"];
	imagettftext($im, $fsize, 0, 80, 370, $fcolor, $font, $text);
}
// 80 - смещение по горизонтали
// 70 - смещение по вертикали

//Рисование топ фармера
if(isset($_GET["tfarmer"])){
	$steamid = $_GET["tfarmer"];
	$url = 'https://steamcommunity.com/profiles/';
	$url .= $steamid;
	$url .= '/?xml=1';
	$sxml = simplexml_load_file($url);
	$avurl = (string) $sxml->avatarMedium;
	$nick = (string) $sxml->steamID;
	$nickt = mb_strimwidth($nick, 0, 15, "...");
	$stamp = imagecreatefromjpeg($avurl);
	imagecopy($im, $stamp, $tfarmerx, $tfarmery, 0, 0, imagesx($stamp), imagesy($stamp));
	imagettftext($im, $tpfsize, 0, $tfarmtextx, $tfarmtexty, $fcolor, $font, 'Топ фармер:');
	imagettftext($im, $tpfsize, 0, $tfarmnickx, $tfarmnicky, $fcolor, $font, $nickt);
}
//Рисование топ рейдера
if(isset($_GET["traider"])){
	$steamid = $_GET["traider"];
	$url = 'https://steamcommunity.com/profiles/';
	$url .= $steamid;
	$url .= '/?xml=1';
	$sxml = simplexml_load_file($url);
	$avurl = (string) $sxml->avatarMedium;
	$nick = (string) $sxml->steamID;
	$nickt = mb_strimwidth($nick, 0, 15, "...");
	$stamp = imagecreatefromjpeg($avurl);
	imagecopy($im, $stamp, $traiderx, $traidery, 0, 0, imagesx($stamp), imagesy($stamp));
	imagettftext($im, $tpfsize, 0, $traidtextx, $traidtexty, $fcolor, $font, 'Топ рейдер:');
	imagettftext($im, $tpfsize, 0, $traidnickx, $traidnicky, $fcolor, $font, $nickt);
}
//Рисование топ киллера
if(isset($_GET["tkiller"])){
	$steamid = $_GET["tkiller"];
	$url = 'https://steamcommunity.com/profiles/';
	$url .= $steamid;
	$url .= '/?xml=1';
	$sxml = simplexml_load_file($url);
	$avurl = (string) $sxml->avatarMedium;
	$nick = (string) $sxml->steamID;
	$nickt = mb_strimwidth($nick, 0, 15, "...");
	$stamp = imagecreatefromjpeg($avurl);
	imagecopy($im, $stamp, $tkillerx, $tkillery, 0, 0, imagesx($stamp), imagesy($stamp));
	imagettftext($im, $tpfsize, 0, $tkilltextx, $tkilltexty, $fcolor, $font, 'Топ киллер:');
	imagettftext($im, $tpfsize, 0, $tkillnickx, $tkillnicky, $fcolor, $font, $nickt);
}

imagejpeg($im, 'vkcover.jpg', 100);

// --- ЗАГРУЗКА НА СЕРВЕР ------------

$ch = curl_init();
$vkurl = 'https://api.vk.com/method/photos.getOwnerCoverPhotoUploadServer?group_id=';
$vkurl .= $group_id;
$vkurl .= '&crop_x2=1590&v=5.74&access_token=';
$vkurl .= $access_token;
curl_setopt($ch, CURLOPT_URL, $vkurl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36');
$getUrl = curl_exec($ch);
curl_close($ch);

if($getUrl) {
    $getUrl = json_decode($getUrl, true);

    $url = $getUrl['response']['upload_url'];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, array('photo' => new CURLFile('vkcover.jpg', 'image/jpeg', 'image0')));
    $upload = curl_exec( $ch );
    curl_close( $ch );

    if($upload) {
        $upload = json_decode($upload, true);
		$ch = curl_init();
		$vkurl = 'https://api.vk.com/method/photos.saveOwnerCoverPhoto?hash=';
		$vkurl .= $upload['hash'];
		$vkurl .= '&photo=';
		$vkurl .= $upload['photo'];
		$vkurl .= '&v=5.74&access_token=';
		$vkurl .= $access_token;
		curl_setopt($ch, CURLOPT_URL, $vkurl);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
		curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36');
		$getUrl = curl_exec($ch);
		curl_close($ch);
		
		if(stripos($getUrl, 'response":{"images":[{')) {
            print_r('good' . PHP_EOL);
        } else {
            print_r('bad');
        }
    }
}