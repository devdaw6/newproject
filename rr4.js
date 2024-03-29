document.addEventListener('load', ()=>document.querySelectorAll('.product__price').forEach(elem=>parseInt(elem.innerText) == 0 ? elem.innerText = 'БЕСПЛАТНО' : ''), true);
document.addEventListener('load', ()=>document.querySelectorAll('.product__price').forEach(elem=>parseInt(elem.innerText) == 0 ? elem.innerText = 'Бесплатно' : ''), true);
var PageCode = new Array();
PageCode["rules"] = {
  title: 'ПРАВИЛА',
  content: '<div class="xbox_custom_rules"><ul style="list-style-type:disc"> <h4>Информация</h4> <li>Не знание правил не освобождает Вас от ответственности.</li></br><li>Зайдя на сервер Вы     автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</li></br><li>Вы несете ответственность за все свои аккаунты. Получив бан за нарушение   на одном аккаунте, вы получите его и на последующих. То же самое будет если на одном из ваших аккаунтах имеется EAC блокировка.</li></br><li>Если Вы уже были   замечены с читами / макросами на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</li></br><li>Администрация не         обязуется компенсировать игровые ценности, утраченные по причине вашей ошибки, багов игры или технических проблем на сервере.</li></br><li>Запрещена продажа   или реклама Читов/Макросов.</li></br><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></br><li>Администрация сама выбирает       наказание для игрока в зависимости от степени нарушения и обстоятельств. Игрок может получить просто предупреждение, а может получить и перманентный бан.       </li></br><h4>Геймплей</h4> <li>Запрещено использовать/хранить читы/макросы или любой другой софт дающий преимущество перед честными игроками.</li></br>       <li>Запрещена игра с читерами/макросниками.</li></br><li>Запрещено использование услуг читеров.</li></br><li>Запрещено использование любых видов багов с       целью или без цели получения преимущества над другими игроками.</li> <br> <h4>Нарушение лимита игроков в команде</h4> <li>Нельзя жить больше положенного       максимума в одном доме</li><br><li>Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума</li><br>   <li>Частая смена тиммейта будет считаться за нарушения правила о лимите</li><br><li>Нельзя рейдить и </li> <br>   <h4>Игровой Чат</h4> <li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></br><li>Запрещен флуд (многократное повторение бессмысленных фраз,         символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</li></br><li>Запрещены провокационные сообщения, по типу - "я читер,     проверь меня".</li> </br> <h4>Проверки</h4> <li>Вы имеете полное право отказаться проходить проверку, но в этом случае вы и ваши тиммейты получат блокировку   на всех наших серверах.</li></br><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего PC.     </li></br><li>Проверки проходят только через программы «DISCORD» и «SKYPE». Каждый игрок на нашем проекте, в обязательном порядке должен иметь одну из данных   программ на своём пк (или хотя-бы аккаунт в дискорде).</li></br><li>Выход с сервера во время вызова на проверку увенчается блокировкой.</li> </ul></br></br></br></div>'
};

PageCode["help"] = {
  title: 'КОМАНДЫ',
  content: '<div class=xbox style="padding:0 20px"><h4>Список команд, связанных с телепортом</h4>\
  <div class=xbox style="padding:0 20px">\
  <span class=extra-command>/tpr [ник игрока]</span> - отправить запрос на телепорт к игроку.\
  <br>\
  <span class=extra-command>/tpc</span> - отменить запрос на телепорт.\
  <br>\
  <span class=extra-command>/tpa</span> - принять запрос на телепорт.\
  <br>\
  <span class=extra-command>/sethome [название дома]</span> - создать точку дома.\
  <br>\
  <span class=extra-command>/home [название дома]</span> - телепортироваться на точку дома с указанным названием.\
  <br><br></div>\
  <h4>Список команд, связанных с друзьями</h4>\
  <div class=xbox style="padding:0 20px">\
  <span class=extra-command>/team add [ник игрока]</span> - добавить игрока в группу.\
  <br>\
  <span class=extra-command>/team remove</span> - удалить игрока из группы.\
  <br><br></div>\
  <h4>Прочие команды</h4>\
  <div class=xbox style="padding:0 20px">\
  <span class=extra-command>/kit</span> - меню наборов.\
  <br>\
  <span class=extra-command>/remove</span> - режим удаления.\
  <br>\
  <span class=extra-command>/up</span> - режим улучшения.\
  <br>\
  <span class=extra-command>/trade [ник игрока]</span> - отправить запрос на обмен игроку.\
  <br>\
  <span class=extra-command>/menu</span> - меню.\
  <br>\
  <span class=extra-command>/store</span> - корзина.\
  <br>\
  <span class=extra-command>/block</span> - блокировка предметов после вайпа.\
  <br>\
  <span class=extra-command>/tpmenu</span> - меню телепортации.\
  <br>\
  <span class=extra-command>/pass</span> - меню заданий.\
  <br>\
  <span class=extra-command>/bp</span> - меню крафта рюкзака.\
  <br>\
  <span class=extra-command>/online</span> - узнать сколько человек на сервере.\
  <br><br></div>\
  <h4>Список биндов, необходимые для удобной игры</h4>\
  <div class=xbox style="padding:0 20px">\
  <span class=extra-command>bind k chat.say /kit</span> - меню наборов.\
  <br>\
  <span class=extra-command>bind l chat.say /remove</span> - режим удаления.\
  <br>\
  <span class=extra-command>bind j chat.say /up</span> - режим улучшения.\
  <br>\
  <span class=extra-command>bind p chat.say /tpmenu</span> - меню телепортации.\
  <br><br>Не обязательно указывать те кнопки, что приведены в списке выше.\nНа каждую команду можете назначить любую удобную для Вас кнопку.\
  </div></div>'
};

PageCode["block"] = {
  title: 'БОНУСЫ', 
  content: '<div class="xbox_custom_rules"><ul style="list-style-type:disc"> <h4>БОНУСЫ</h4> <li>Промокод "devdaw6" - даёт 30₽</li></br><li>Промокод "wipe" - даёт 7% скидки на все</li></br><li> Общая сумма пополнение на 5000₽ добавит вам еще 2000₽!!!</li></br><li>Разовое пополнение на 1000₽ прибавит вам еще 500₽!!!</li></br></ul></br></br></br></div>'
};
PageCode["kit-free"] = {
  title: 'СТАРТОВЫЕ НАБОРЫ',
  content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">Випка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">Премка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-deluxe\', false);">Элитка</button>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Стартовый" - <span>Откат 5М</span></div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/BN0uomh.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/OVSvDet.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/TYnBOEV.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/87Q3Jcs.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/zOMIQ9P.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/HTUzGn3.png">\
  <div class="kit-item__quantity">x100</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VbFwvmU.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/sSLnv5k.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/lkD7NKF.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  </div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Еда" - <span>Откат 5М</span></div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jlISs06.png">\
  <div class="kit-item__quantity">x5</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/LHbWmTf.png">\
  <div class="kit-item__quantity">x3</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Dv2swRx.png">\
  <div class="kit-item__quantity">x4</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
  <div class="kit-item__quantity">x3</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/feCAU5G.png">\
  <div class="kit-item__quantity">x3</div></div></div>\
  </div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Медикаменты" - <span>Откат 5М</span></div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/spbQxSa.png">\
  <div class="kit-item__quantity">x5</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/dsPh3gA.png">\
<div class="kit-item__quantity">x3</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/h6bAR8m.png">\
<div class="kit-item__quantity">x10</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/lc4dbE2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
  </div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Дом"</div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Ofq5bfe.png">\
  <div class="kit-item__quantity">x3000</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/gcuGgxz.png">\
  <div class="kit-item__quantity">x5000</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/POksAHx.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/wxU71W4.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/y69mz7D.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/yOf1vPQ.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-vip"] = {
	title: 'ПЛАТНЫЕ НАБОРЫ',
	content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">Випка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">Премка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-deluxe\', false);">Элитка</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Випка" - <span>Откат 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GGOBDBA.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3di5Nt8.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DbvZj7R.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Felj59n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jhERjS2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f0JTIBz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9fQMqub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/iKqP1bq.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Bg7Lv1R.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/5JJagoK.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/0nHBPjJ.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/xjtLRMt.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QtyQI6O.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JpD5lDN.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/J43cr8o.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/tAzbw38.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/NWpgnhH.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/s5lccHv.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/RuKlm4m.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jAIiV2E.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4LkwqAj.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JHhrCdW.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/o6RdzHA.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/1wnGTPc.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VdPUboO.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fgNBljZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

PageCode["kit-prem"] = {
	title: 'ПЛАТНЫЕ НАБОРЫ',
	content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">Випка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">Премка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-deluxe\', false);">Элитка</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Премка" - <span>Откат 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GGOBDBA.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3di5Nt8.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DbvZj7R.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Felj59n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jhERjS2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f0JTIBz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9fQMqub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/iKqP1bq.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Bg7Lv1R.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/5JJagoK.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/0nHBPjJ.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/xjtLRMt.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QtyQI6O.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JpD5lDN.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/J43cr8o.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/tAzbw38.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/NWpgnhH.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/s5lccHv.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/RuKlm4m.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jAIiV2E.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4LkwqAj.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JHhrCdW.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/o6RdzHA.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/1wnGTPc.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VdPUboO.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fgNBljZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
PageCode["kit-deluxe"] = {
	title: 'ПЛАТНЫЕ НАБОРЫ',
	content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-vip\', false);">Випка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">Премка</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-deluxe\', false);">Элитка</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "Элитка" - <span>Откат 12Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GGOBDBA.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3di5Nt8.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DbvZj7R.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Felj59n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jhERjS2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f0JTIBz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9fQMqub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/iKqP1bq.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Bg7Lv1R.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/5JJagoK.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/0nHBPjJ.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/xjtLRMt.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QtyQI6O.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JpD5lDN.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/J43cr8o.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/tAzbw38.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/NWpgnhH.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/s5lccHv.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/RuKlm4m.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jAIiV2E.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4LkwqAj.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JHhrCdW.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/o6RdzHA.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/1wnGTPc.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VdPUboO.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fgNBljZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};
  PageCode["kit-warsfree"] = {
  title: 'БЕСПЛАТНЫЕ НАБОРЫ',
  content: '<div class="store-categories">\
<button class="btn btn-secondary" onclick="Open(\'kit-autostart\', false);">Автостартовый</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsfree\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsvip\', false);">Бронзовый</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsprem\', false);">Серебрянный</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warselite\', false);">Золотой</button>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Стартовый" - <span>Откат 15М</span></div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/arrow.wooden.png">\
  <div class="kit-item__quantity">x30</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.bone.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sunglasses.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shirt.collared.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.shorts.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
  <div class="kit-item__quantity">x3</div></div></div>\
  </div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Еда" - <span>Откат 10М</span></div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bearmeat.cooked.png">\
  <div class="kit-item__quantity">x3</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pumpkin.png">\
  <div class="kit-item__quantity">x3</div></div></div>\
  </div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Хилка" - <span>Откат 10М</span></div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
  <div class="kit-item__quantity">x3</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\   <div class="kit-item__quantity">x2</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\   <div class="kit-item__quantity">x1</div></div></div>\
  </div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор "Дом" - <span>Откат 12Ч</span></div>\
  <div class="kit_set"><div class="kit-items">\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
  <div class="kit-item__quantity">x1000</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
  <div class="kit-item__quantity">x3000</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
  <div class="kit-item__quantity">x250</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sleepingbag.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cupboard.tool.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/box.wooden.large.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/building.planner.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
  <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hammer.png">\
  <div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

PageCode["kit-warsfree"] = {
	title: 'БЕСПЛАТНЫЕ НАБОРЫ',
	content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsfree\', false);">Халява</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsvip\', false);">Бронзовый</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsprem\', false);">Серебрянный</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warselite\', false);">Золотой</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Автостартовый набор</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GGOBDBA.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/LRKCHAD.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Felj59n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jhERjS2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/IyVdUZr.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f0JTIBz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9fQMqub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/R0Johcj.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ThyvZQ1.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/F8el6b3.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/iKqP1bq.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/RaLfcsH.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/7IXpKyz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/lXbaw40.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/kX9Y0s0.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jdSRq6W.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/asylM3m.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ek317zq.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/BlbSCa5.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/zZ1KBbq.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор Оружие - <span>Откат 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ek317zq.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bNtXDVU.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/asylM3m.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/kX9Y0s0.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор Ловушки - <span>Откат 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/AvSVMwT.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/CZ7cWKd.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/2nd3B7i.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JLg5gIL.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
</div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор БУМ - <span>Откат 3Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uFiwDW9.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Zg21T6A.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JHhrCdW.png">\
<div class="kit-item__quantity">x30</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор Топливо - <span>Откат 30М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/LcGkwnQ.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
</div></div></div>\
  <div class="xbox_custom_kits" ><div class="serverheader">Набор Инструменты - <span>Откат 30М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VdPUboO.png">\
<div class="kit-item__quantity">х1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fgNBljZ.png">\
<div class="kit-item__quantity">х1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f2V2Dkc.png">\
<div class="kit-item__quantity">х1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/z6g1Xlu.png">\
<div class="kit-item__quantity">х1</div></div></div>\
</div></div></div>\
 <div class="xbox_custom_kits" ><div class="serverheader">Набор Карт - <span>Откат 5М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/l8v1ivH.png">\
<div class="kit-item__quantity">х1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/l8HdKNQ.png">\
<div class="kit-item__quantity">х1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/gcs50SM.png">\
<div class="kit-item__quantity">х1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Костюм Бандита - <span>Откат 5М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Ef5hp7u.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Костюм Арктика - <span>Откат 5М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/io3RSSS.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Костюм Кочевника - <span>Откат 5М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/tG4HhNT.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Набор ХИЛКИ - <span>Откат 5М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/N4gsUR2.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>'
};

PageCode["kit-warsvip"] = {
	title: 'ПЛАТНЫЕ НАБОРЫ',
	content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsfree\', false);">Халява</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsvip\', false);">Бронзовый</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsprem\', false);">Серебрянный</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warselite\', false);">Золотой</button>\
<div class="kit_set"><div class="kit-items">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "БРОНЗОВЫЙ" - <span>Откат 5Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Felj59n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9fQMqub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f0JTIBz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jhERjS2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GGOBDBA.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DbvZj7R.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3di5Nt8.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DzQNYG6.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uFiwDW9.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/eMPYhIC.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/2VzFUjF.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/00Knbua.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4xSfvKC.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/C30YF0Z.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3M8Xw8S.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/tF0mOxM.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/apAkiQ7.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/WHVa4Pe.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/oYgz213.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/oxHBJgm.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ToOrzYO.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/5iDc8TE.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/82XIuMD.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4LkwqAj.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/CSZU7W2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Zg21T6A.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/N4gsUR2.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Автостартовый набор</div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/pHsCsNn.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/OhvHndh.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VJncoc6.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/y3JEEF3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/h6baM2n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9exDA4J.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hZzCTN2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uFiwDW9.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/RaLfcsH.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VdPUboO.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fgNBljZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Zg21T6A.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/6RUMbsp.png">\
<div class="kit-item__quantity">x12</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>'
};

PageCode["kit-warsprem"] = {
	title: 'ПЛАТНЫЕ НАБОРЫ',
	content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsfree\', false);">Халява</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsvip\', false);">Бронзовый</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsprem\', false);">Серебрянный</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warselite\', false);">Золотой</button>\
<div class="kit_set"><div class="kit-items">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "СЕРЕБРЯННЫЙ" - <span>Откат 5Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Felj59n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9fQMqub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f0JTIBz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jhERjS2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GGOBDBA.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DbvZj7R.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3di5Nt8.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DzQNYG6.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uFiwDW9.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/eMPYhIC.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/2VzFUjF.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/00Knbua.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4xSfvKC.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/C30YF0Z.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3M8Xw8S.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/tF0mOxM.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/apAkiQ7.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/WHVa4Pe.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/oYgz213.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/oxHBJgm.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ToOrzYO.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/5iDc8TE.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/82XIuMD.png">\
<div class="kit-item__quantity">х45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4LkwqAj.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/CSZU7W2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Zg21T6A.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/N4gsUR2.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Автостартовый набор</div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/pHsCsNn.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/OhvHndh.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VJncoc6.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/y3JEEF3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/h6baM2n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9exDA4J.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hZzCTN2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uFiwDW9.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/RaLfcsH.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VdPUboO.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fgNBljZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Zg21T6A.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/6RUMbsp.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>'
};

PageCode["kit-warselite"] = {
	title: 'Платные наборы',
	content: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsfree\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsvip\', false);">Бронзовый</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warsprem\', false);">Серебрянный</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-warselite\', false);">Золотой</button>\
<div class="kit_set"><div class="kit-items">\
<div class="xbox_custom_kits" ><div class="serverheader">Набор "ЗОЛОТОЙ" - <span>Откат 5Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Felj59n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9fQMqub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/f0JTIBz.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jhERjS2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GGOBDBA.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DbvZj7R.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3di5Nt8.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/DzQNYG6.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uFiwDW9.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/eMPYhIC.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/2VzFUjF.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/00Knbua.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4xSfvKC.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/C30YF0Z.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/3M8Xw8S.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/tF0mOxM.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/apAkiQ7.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/WHVa4Pe.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/oYgz213.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/oxHBJgm.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ToOrzYO.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/5iDc8TE.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/82XIuMD.png">\
<div class="kit-item__quantity">х60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4LkwqAj.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JHhrCdW.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/CSZU7W2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Zg21T6A.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/N4gsUR2.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Автостартовый набор</div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/pHsCsNn.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/OhvHndh.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VJncoc6.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/y3JEEF3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/h6baM2n.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/9exDA4J.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hZzCTN2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/4lVyyKd.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fGqU5lh.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/mE9510R.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/bf6bDmK.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uFiwDW9.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/JHhrCdW.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/KMTcyBx.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/RaLfcsH.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/VdPUboO.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/fgNBljZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/M2XDzMZ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/Zg21T6A.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/p11Yh8e.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/ynSAaUb.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/GEIVNcL.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/uUSYaCJ.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/6RUMbsp.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/hlLXdJ0.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div></div>'
};

function Open(Page, usefade = true) {
  closepage();
  var div1 = document.createElement("div");
  div1.style = 'position: relative; z-index: 1050;';
  div1.id = 'ExtModal';
  var div2 = document.createElement("div");
  div2.className = 'modal fade show';
  if(!usefade) div2.classList.add("show");
  div2.style = 'display: block;';
  div2.id = 'quit';
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">'+PageCode[Page].title+'</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = PageCode[Page].content;
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<center><button class="btn btn-danger" id="quit">Закрыть</button><center>';
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";
	
  div1.appendChild(div2);
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
	
  if(PageCode[Page].func != null) {
	PageCode[Page].func();
  }
}

function closepage() {
  var Modal = document.getElementById('ExtModal');
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
window.onload = function () {
  document.body.onclick=function(event)
  {
    if(event.target.id == 'quit') {closepage();}
	else if(event.target.id == 'extra-block') {Open("block");}
	else if(event.target.id == 'extra-help') {Open("help");}
	else if(event.target.id == 'extra-rules') {Open("rules");}
	else if(event.target.id == 'extra-kit-free') {Open("kit-free");}
  }
  if(window.location.pathname == "/rules") {LoadPageOld('rules');}
  else if(window.location.pathname == "/help") {LoadPageOld('help');}
  else if(window.location.pathname == "/block") {LoadPageOld('block');}
  else if(window.location.pathname == "/kit-free") {LoadPageOld('kit-free');}
}
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'S'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'D'.charCodeAt(0)){
    return false;
  }
}

function nocopy(event) {
  var event = event || window.event;
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; }
  return false;
}
document.onmouseup = nocopy;
document.onmousemove = nocopy;
document.ondragstart = nocopy;
document.onselectstart = nocopy;
document.ontextmenu = nocopy;
document.oncopy = nocopy;
document.oncontextmenu = nocopy;
var CustomerSteamId = "0";
var OvhPayUrl = "";

PageCode["Oplata"] = {
	title: 'Способы пополнения баланса',
	content: '<div class="xbox oplata_info"><form onsubmit="return qiwiHandler(event)" id="qiwi-inp-form" method="get" target="_blank" action="https://oplata.qiwi.com/create">\
<div class="qiwi-inp-oplata">\
	<div class="qiwi-widget-title">Qiwi & Карты<br><p>минимальная комиссия</p></div>\
	<div class="qiwi-inp-box">\
			<label for="qiwi-donation-amount" class="qiwi-label">Cумма</label>\
			<div class="qiwi-rub">₽</div>\
			<input type="tel" placeholder="Сумма" id="qiwi-donation-amount" name="amount" required="" value="">\
			<input type="hidden" id="qiwi-donation-comment" name="comment" value="Пожертвование на rzmx.ru">\
			<input type="hidden" name="publicKey" value="eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6IjY3dnQyaC0wMCIsInVzZXJfaWQiOiI3OTkyMzMzMDc0NCIsInNlY3JldCI6IjU5NGY1MjAyM2NkODNlODAzNjI0MDA1OGU3MzJkZDAxODc1ODQ2YzA1ZjNlOGY0MTU0YTBkMDQ2NjY0Zjg4N2YifX0=">\
			<input type="hidden" id="qiwi-donation-account" name="account" value="0">\
			<input type="hidden" name="customFields[themeCode]" value="Danyl-KSsYnA-Jn5">\
			<input type="hidden" id="qiwi-successUrl" name="successUrl" value="https://rzmx.ru">\
			<div class="qiwi-error-box" id="qiwi-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="qiwi-submit-main" width="159px" type="submit">Оплатить</button>\
	</div>\
</div>\
</form>\
<div class="oplata_cont"><a class="container-oplata" id="qiwi-inp-other">\
	<img alt="" src="https://i.imgur.com/kb8M7vg.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить картой</span><span class="category-user">Visa и Mastercard</span></div><a class="container-oplata" id="qiwi-inp-other2">\
'
};



var BlockListArrays = [
['shotgun.waterpipe', 'pistol.revolver'],
['flamethrower', 'pistol.python', 'pistol.semiauto', 'shotgun.double'], 
['shotgun.pump', 'shotgun.spas12', 'pistol.m92', 'rifle.semiauto', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt', 'pookie.bear'],
['smg.2', 'smg.thompson', 'smg.mp5', 'rifle.m39', 'metal.facemask', 'metal.plate.torso'], 
['rifle.bolt', 'multiplegrenadelauncher', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], 
['rifle.ak', 'rifle.lr300', 'rifle.l96', 'grenade.f1', 'grenade.beancan', 'explosive.satchel'],
['lmg.m249', 'ammo.rifle.explosive', 'explosive.timed', 'rocket.launcher', 'ammo.grenadelauncher.he']];


PageCode["block"] = {
	title: 'Блокировка предметов после вайпа', 
	content: '<div class="xbox_custom_block"><div class="kit-items">'
	
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
	div5.innerHTML = '<h4 class="modal-title">'+PageCode[el].title+'</h4>';
	var div6 = document.createElement("div");
	div6.className = "modal-body";
	div6.innerHTML = PageCode[el].content;
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
		PageCode["block"].content += '<div class="block_by_category block_category_'+ (i + 1) +'">';
		for (var b = 0; b < BlockListArrays[i].length; b++) {
			if(b == 5 && i == 4)
			PageCode["block"].content += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
			else
			PageCode["block"].content += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/'+ BlockListArrays[i][b] +'.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
		}
		PageCode["block"].content += '</div>';
	}
	PageCode["block"].content += '</div>\<br></i></div>';
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