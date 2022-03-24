curcontent["Oplata"] = {
	xhead: 'Способы пополнения баланса',
	xcon: '<div class="xbox oplata_info"><form onsubmit="return qiwiHandler(event)" id="qiwi-inp-form" method="get" target="_blank" action="https://oplata.qiwi.com/create">\
<div class="qiwi-inp-oplata">\
	<div class="qiwi-widget-title">Qiwi & Карты<br><p>минимальная комиссия</p></div>\
	<div class="qiwi-inp-box">\
			<label for="qiwi-donation-amount" class="qiwi-label">Cумма</label>\
			<div class="qiwi-rub">₽</div>\
			<input type="tel" placeholder="Сумма" id="qiwi-donation-amount" name="amount" required="" value="">\
			<input type="hidden" id="qiwi-donation-comment" name="comment" value="Пожертвование на bloodrust.ru">\
			<input type="hidden" name="publicKey" value="48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPs3gNggFKzubM8g7ocg4Mkz85xGXXT6YYjWFsEkk7WaPrB4oJgA6Y1qCGp92etzuwgGPM5gGeNoeN3qhTNgnmBGqPNfgvudVGJkS7yu4B4">\
			<input type="hidden" id="qiwi-donation-account" name="account" value="0">\
			<input type="hidden" name="customFields[themeCode]" value="Danyl-KSsYnA-Jn5">\
			<input type="hidden" id="qiwi-successUrl" name="successUrl" value="https://bloodrust.ru">\
			<div class="qiwi-error-box" id="qiwi-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="qiwi-submit-main" width="159px" type="submit">Оплатить</button>\
	</div>\
</div>\
</form>\
<div class="oplata_cont"><a class="container-oplata" id="qiwi-inp-other">\
	<img alt="" src="https://i.imgur.com/kb8M7vg.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить картой</span><span class="category-user">Visa и Mastercard</span></div><a class="container-oplata" id="qiwi-inp-other2">\
	<img alt="" src="https://i.imgur.com/2ud2aUY.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить через PayPal</span></div><a class="container-oplata" onclick="Open(\'skins\');" target="_blank">\
	<img alt="" src="https://i.imgur.com/iV8LCN1.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить скинами</span><span class="category-user">По ценам с торговой площадки</span></div></div>'
};



var BlockListArrays = [
['shotgun.waterpipe', 'pistol.revolver'],
['flamethrower', 'pistol.python', 'pistol.semiauto', 'shotgun.double'], 
['shotgun.pump', 'shotgun.spas12', 'pistol.m92', 'rifle.semiauto', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt', 'pookie.bear'],
['smg.2', 'smg.thompson', 'smg.mp5', 'rifle.m39', 'metal.facemask', 'metal.plate.torso'], 
['rifle.bolt', 'multiplegrenadelauncher', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], 
['rifle.ak', 'rifle.lr300', 'rifle.l96', 'grenade.f1', 'grenade.beancan', 'explosive.satchel'],
['lmg.m249', 'ammo.rifle.explosive', 'explosive.timed', 'rocket.launcher', 'ammo.grenadelauncher.he']];


curcontent["block"] = {
	xhead: 'Блокировка предметов после вайпа', 
	xcon: '<div class="xbox_custom_block"><div class="kit-items">'
	
};



function Open(el, usefade = true, zind = false) {
	closepage();
	var div1 = document.createElement("div");
    div1.id = 'Modal';
	var div2 = document.createElement("div");
	div2.className = 'modal modal-service fade';
	if(!usefade) div2.classList.add("show");
	div2.style = 'display: block; z-index: 1100;';
	div2.id = 'closer';
	//div2.onclick = closepage;
	var div3 = document.createElement("div");
	div3.className = "modal-dialog modal-lg";
	if(el=="block")div3.className+=" modal-lg-block"
	var div4 = document.createElement("div");
	div4.className = "modal-content";
	var div5 = document.createElement("div");
	div5.className = "modal-header";
	div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
	var div6 = document.createElement("div");
	div6.className = "modal-body";
	div6.innerHTML = curcontent[el].xcon;
	var div7 = document.createElement("div");
	div7.className = "modal-footer";
	div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
	var div8 = document.createElement("div");
	div8.className = "modal-backdrop fade show";
	div8.style = 'z-index: 1050;';
	
	div1.appendChild(div2);
	//div2.appendChild(div2_5);
	div2.appendChild(div3);
	div3.appendChild(div4);
	div4.appendChild(div5);
	div4.appendChild(div6);
	div4.appendChild(div7);
	div1.appendChild(div8);
	if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div1);
	body.className = "modal-open";
}


function closepage() {
  var Modal = document.getElementById('Modal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

function search(e){
	if (e.offsetX < 1) { 
		console.log(e.target.innerText + ' | ' + e.clientX);
		if (document.selection) { // IE
			var range = document.body.createTextRange();
			range.moveToElementText(e.target);
			range.select();
		} else if (window.getSelection) {
			var range = document.createRange();
			range.selectNode(e.target);
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(range);
		}
		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.'); 
		  } catch (err) {
			console.log('Oops, unable to copy' + err);
		  }
    }
}

window.onload = function () {
	document.body.onclick=function(event)
	{
		if(event.target.id == 'closer')closepage();
		if(event.target.className == 'MsoCommand')search(event);
	}
	
	for (var i = 0; i < BlockListArrays.length; i++) {
		curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'">';
		for (var b = 0; b < BlockListArrays[i].length; b++) {
			if(b == 5 && i == 4)
			curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
			else
			curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/'+ BlockListArrays[i][b] +'.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
		}
		curcontent["block"].xcon += '</div>';
	}
	curcontent["block"].xcon += '</div>\<br></i></div>';
}

var CustomerSteamId = "0";
var OvhPayUrl = "";

function qiwiHandler(e){
	//e.preventDefault();
	var inputval = document.getElementById('qiwi-donation-amount').value;
	var inputfloat = parseFloat(inputval).toFixed(2);
	if(inputfloat < 20 || inputfloat > 15000 || isNaN(inputfloat)){
		document.getElementById('qiwi-error-box').innerText = "От 20 до 15000 RUB";
		e.preventDefault();
		return false;
	}else{
		document.getElementById('qiwi-error-box').innerText = "";
	}
	document.getElementById('qiwi-donation-amount').value = inputfloat;
	if(CustomerSteamId == "0" || CustomerSteamId == ""){
		document.getElementById('qiwi-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";
		e.preventDefault();
		return false;
	}
	qiwiFormHandle();
	
	
	
	
	return null;
}

function qiwiFormHandle(){
	var qiwi_comment = document.getElementById('qiwi-donation-comment');
	qiwi_comment.value = CustomerSteamId;
	document.getElementById('qiwi-donation-account').value = CustomerSteamId;
	document.getElementById('qiwi-inp-other').setAttribute("href", OvhPayUrl);
	document.getElementById('qiwi-inp-other2').setAttribute("href", OvhPayUrl);
	document.getElementById('qiwi-successUrl').value = 'https://'+window.location.hostname;
}

function OvhUrlOverrite(){
	var slides = document.getElementsByClassName("nav-link");
	for (var i = 0; i < slides.length; i++) {
		var elelink = slides.item(i);
		var urlelelink = elelink.getAttribute("href");
	   if(urlelelink.startsWith('https://pay.moscow.ovh')){
		   OvhPayUrl = urlelelink;
		   console.log(OvhPayUrl);
		   elelink.setAttribute("href", "javascript:;");
		   elelink.setAttribute("onclick", "OpenOplata()");
	   }
	}
}

function obtainShopSteamId(){
	if(CustomerSteamId != "0" && CustomerSteamId != ""){
		return;
	}
	var xmlHttp = new XMLHttpRequest();

        if(xmlHttp != null)
        {
            xmlHttp.open( "GET", "/api/index.php?modules=users&action=getData", true );
            xmlHttp.send( null );
        }
		xmlHttp.onload = function(gjson) {
			var gjson = JSON.parse(xmlHttp.response);
          console.log(gjson);
			var preSteam = gjson.data.steamID;
			OvhPayUrl = "https://pay.moscow.ovh/?"+gjson.data.pay;
			if(preSteam > 76561100000000000 || !isNaN(preSteam)){
				CustomerSteamId = preSteam.toString();
				//qiwiFormHandle();
				OvhUrlOverrite();
			}else{
				console.log("error obtainShopSteamId! "+ gjson);
			}
		}

}

function OpenOplata(){
	Open('Oplata');
			qiwiFormHandle();
	setTimeout(() => function () {
		try{
			qiwiFormHandle();
		}catch(e){
			console.log('element not found '+ e);
		}
	}, 3000);
}

var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}
window.addEventListener("load",function () {
	try{
		obtainShopSteamId();
	}catch(e){
		console.log('element not found '+ e);
	}
});