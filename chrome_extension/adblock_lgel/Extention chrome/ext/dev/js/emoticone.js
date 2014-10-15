define([],
function () {
	var emoticone = function () {
		this.emoticoneList = {
			':)'           : '<img src="http://image.jeuxvideo.com/smileys_img/1.gif" width="16" height="16" alt=""/>',
			':snif:'       : '<img src="http://image.jeuxvideo.com/smileys_img/20.gif" width="16" height="16" alt=""/>',
			':gba:'        : '<img src="http://image.jeuxvideo.com/smileys_img/17.gif" alt="" width="16" height="12" />',
			':g)'          : '<img src="http://image.jeuxvideo.com/smileys_img/3.gif" width="16" height="16" alt=""/>',
			':-)'          : '<img src="http://image.jeuxvideo.com/smileys_img/46.gif" width="16" height="16" alt=""/>',
			':snif2:'      : '<img src="http://image.jeuxvideo.com/smileys_img/13.gif" width="16" height="16" alt=""/>',
			':bravo:'      : '<img src="http://image.jeuxvideo.com/smileys_img/69.gif" alt="" width="16" height="17" />',
			':d)'          : '<img src="http://image.jeuxvideo.com/smileys_img/4.gif" width="16" height="16" alt=""/>',
			':hap:'        : '<img src="http://image.jeuxvideo.com/smileys_img/18.gif" width="16" height="16" alt=""/>',
			':ouch:'       : '<img src="http://image.jeuxvideo.com/smileys_img/22.gif" width="16" height="16" alt=""/>',
			':pacg:'       : '<img src="http://image.jeuxvideo.com/smileys_img/9.gif" width="16" height="16" alt=""/>',
			':cd:'         : '<img src="http://image.jeuxvideo.com/smileys_img/5.gif" width="16" height="16" alt=""/>',
			':-)))'        : '<img src="http://image.jeuxvideo.com/smileys_img/23.gif" width="16" height="16" alt=""/>',
			':ouch2:'      : '<img src="http://image.jeuxvideo.com/smileys_img/57.gif" width="16" height="16" alt=""/>',
			':pacd:'       : '<img src="http://image.jeuxvideo.com/smileys_img/10.gif" width="16" height="16" alt=""/>',
			':cute:'       : '<img src="http://image.jeuxvideo.com/smileys_img/nyu.gif" width="16" height="17" alt=""/>',
			':content:'    : '<img src="http://image.jeuxvideo.com/smileys_img/24.gif" width="16" height="16" alt=""/>',
			':p)'          : '<img src="http://image.jeuxvideo.com/smileys_img/7.gif" width="16" height="16" alt=""/>',
			':p'           : '<img src="http://image.jeuxvideo.com/smileys_img/31.gif" width="16" height="16" alt=""/>',
			':noel:'       : '<img src="http://image.jeuxvideo.com/smileys_img/11.gif" width="16" height="16" alt=""/>',
			':oui:'        : '<img src="http://image.jeuxvideo.com/smileys_img/37.gif" width="16" height="16" alt=""/>',
			':('           : '<img src="http://image.jeuxvideo.com/smileys_img/45.gif" width="16" height="16" alt=""/>',
			':peur:'       : '<img src="http://image.jeuxvideo.com/smileys_img/47.gif" width="16" height="16" alt=""/>',
			':question:'   : '<img src="http://image.jeuxvideo.com/smileys_img/2.gif" alt="" width="26" height="24" />',
			':cool:'       : '<img src="http://image.jeuxvideo.com/smileys_img/26.gif" width="16" height="16" alt=""/>',
			':-('          : '<img src="http://image.jeuxvideo.com/smileys_img/14.gif" width="16" height="16" alt=""/>',
			':coeur:'      : '<img src="http://image.jeuxvideo.com/smileys_img/54.gif" alt="" width="21" height="20" />',
			':mort:'       : '<img src="http://image.jeuxvideo.com/smileys_img/21.gif" width="16" height="16" alt=""/>',
			':rire:'       : '<img src="http://image.jeuxvideo.com/smileys_img/39.gif" width="16" height="16" alt=""/>',
			':-(('         : '<img src="http://image.jeuxvideo.com/smileys_img/15.gif" width="16" height="16" alt=""/>',
			':fou:'        : '<img src="http://image.jeuxvideo.com/smileys_img/50.gif" width="16" height="16" alt=""/>',
			':sleep:'      : '<img src="http://image.jeuxvideo.com/smileys_img/27.gif" alt="" width="23" height="26" />',
			':-D'          : '<img src="http://image.jeuxvideo.com/smileys_img/40.gif" width="16" height="16" alt=""/>',
			':nonnon:'     : '<img src="http://image.jeuxvideo.com/smileys_img/25.gif" width="16" height="16" alt=""/>',
			':fier:'       : '<img src="http://image.jeuxvideo.com/smileys_img/53.gif" width="16" height="16" alt=""/>',
			':honte:'      : '<img src="http://image.jeuxvideo.com/smileys_img/30.gif" width="16" height="16" alt=""/>',
			':rire2:'      : '<img src="http://image.jeuxvideo.com/smileys_img/41.gif" width="16" height="16" alt=""/>',
			':non2:'       : '<img src="http://image.jeuxvideo.com/smileys_img/33.gif" width="16" height="16" alt=""/>',
			':sarcastic:'  : '<img src="http://image.jeuxvideo.com/smileys_img/43.gif" width="16" height="16" alt=""/>',
			':monoeil:'    : '<img src="http://image.jeuxvideo.com/smileys_img/34.gif" width="16" height="16" alt=""/>',
			':o))'         : '<img src="http://image.jeuxvideo.com/smileys_img/12.gif" width="16" height="16" alt=""/>',
			':nah:'        : '<img src="http://image.jeuxvideo.com/smileys_img/19.gif" width="16" height="16" alt=""/>',
			':doute:'      : '<img src="http://image.jeuxvideo.com/smileys_img/28.gif" width="16" height="16" alt=""/>',
			':rouge:'      : '<img src="http://image.jeuxvideo.com/smileys_img/55.gif" width="16" height="16" alt=""/>',
			':ok:'         : '<img src="http://image.jeuxvideo.com/smileys_img/36.gif" width="24" height="16" alt=""/>',
			':non:'        : '<img src="http://image.jeuxvideo.com/smileys_img/35.gif" width="16" height="16" alt=""/>',
			':malade:'     : '<img src="http://image.jeuxvideo.com/smileys_img/8.gif" width="16" height="16" alt=""/>',
			':fete:'       : '<img src="http://image.jeuxvideo.com/smileys_img/66.gif" alt="" width="26" height="21" />',
			':sournois:'   : '<img src="http://image.jeuxvideo.com/smileys_img/67.gif" width="16" height="16" alt=""/>',
			':hum:'        : '<img src="http://image.jeuxvideo.com/smileys_img/68.gif" width="16" height="16" alt=""/>',
			':ange:'       : '<img src="http://image.jeuxvideo.com/smileys_img/60.gif" alt="" width="31" height="24" />',
			':diable:'     : '<img src="http://image.jeuxvideo.com/smileys_img/61.gif" alt="" width="35" height="20" />',
			':gni:'        : '<img src="http://image.jeuxvideo.com/smileys_img/62.gif" alt="" width="16" height="27" />',
			':play:'       : '<img src="http://image.jeuxvideo.com/smileys_img/play.gif" alt="" width="19" height="28" />',
			':desole:'     : '<img src="http://image.jeuxvideo.com/smileys_img/65.gif" alt="" width="47" height="39" />',
			':spoiler:'    : '<img src="http://image.jeuxvideo.com/smileys_img/63.gif" alt="" width="50" height="34" />',
			':merci:'      : '<img src="http://image.jeuxvideo.com/smileys_img/58.gif" alt="" width="44" height="40" />',
			':svp:'        : '<img src="http://image.jeuxvideo.com/smileys_img/59.gif" alt="" width="50" height="39" />',
			':sors:'       : '<img src="http://image.jeuxvideo.com/smileys_img/56.gif" alt="" width="50" height="34" />',
			':salut:'      : '<img src="http://image.jeuxvideo.com/smileys_img/42.gif" alt="" width="46" height="41" />',
			':rechercher:' : '<img src="http://image.jeuxvideo.com/smileys_img/38.gif" alt="" width="50" height="34" />',
			':hello:'      : '<img src="http://image.jeuxvideo.com/smileys_img/29.gif" alt="" width="45" height="41" />',
			':up:'         : '<img src="http://image.jeuxvideo.com/smileys_img/44.gif" alt="" width="37" height="42" />',
			':bye:'        : '<img src="http://image.jeuxvideo.com/smileys_img/48.gif" alt="" width="44" height="42" />',
			':gne:'        : '<img src="http://image.jeuxvideo.com/smileys_img/51.gif" alt="" width="65" height="46" />',
			':lol:'        : '<img src="http://image.jeuxvideo.com/smileys_img/32.gif" alt="" width="37" height="44" />',
			':dpdr:'       : '<img src="http://image.jeuxvideo.com/smileys_img/49.gif" alt="" width="64" height="44" />',
			':dehors:'     : '<img src="http://image.jeuxvideo.com/smileys_img/52.gif" alt="" width="58" height="57" />',
			':hs:'         : '<img src="http://image.jeuxvideo.com/smileys_img/64.gif" alt="" width="51" height="32" />',
			':banzai:'     : '<img src="http://image.jeuxvideo.com/smileys_img/70.gif" alt="" width="49" height="42" />',
			':bave:'       : '<img src="http://image.jeuxvideo.com/smileys_img/71.gif" width="16" height="16" alt=""/>',
			':machadou:'       : '<img src="http://www.hellogif.com/img/smileys/2/1613-d73cd.gif" width="16" height="16" alt=""/>',
			':pf:'         : '<img src="http://image.jeuxvideo.com/smileys_img/pf.gif" width="16" height="16" alt=""/>'
		}
		this.scanDelay = Date.now();
		this.scanDelayEgerie = Date.now();
		this.scanIndex = 0;
	}

	emoticone.prototype.displayOnChat = function () {
		//Transforme les émoticones du chat
		if (Date.now() - this.scanDelay >= 30) {
			var canal_meneur = document.getElementsByClassName('canal_joueurs');
			for(this.scanIndex ; this.scanIndex < canal_meneur.length ; this.scanIndex++)
			{
				if ( (canal_meneur.length - this.scanIndex > 5) && (Date.now() - this.scanDelay >= 150) || (canal_meneur.length - this.scanIndex < 5)  ) {
					if (canal_meneur[this.scanIndex].innerHTML.search("citationExt") == -1) {
						temp = canal_meneur[this.scanIndex].innerHTML.replace(new RegExp("<b>", "g"), "");
						temp = temp.replace(new RegExp("</b>", "g"), "");
						temp = temp.replace(new RegExp('<i style="font-size:80%">', "g"), "");
						temp = temp.replace(new RegExp('</i>', "g"), "");
						temp = temp.replace(new RegExp('"', "g"), '');
						temp = temp.replace(new RegExp("'", "g"), '');
						for (key in this.emoticoneList) {
				    		temp = temp.replace(key, "")
						}
						temp = '<img style="cursor: pointer" class="tchatIcon" src="http://delfisakura.com/citer.gif" alt="Cliquez ici pour citer" onclick=\'citationExt(\"' + temp + '\")\' height="12" width="12">';
						canal_meneur[this.scanIndex].innerHTML = temp + " " + canal_meneur[this.scanIndex].innerHTML;
					} else {
						temp = "";
					}
					for (key in this.emoticoneList) {
				    	canal_meneur[this.scanIndex].innerHTML = canal_meneur[this.scanIndex].innerHTML.replace(key, this.emoticoneList[key])
					}
				}
			}
			this.scanDelay = Date.now();
		}

		// Met en place le bouton pour ouvrir la liste des emoticone.
		if ( !document.getElementById('modal-smileys' ) ) {
			var postChatDiv = document.getElementById('postChat');
			postChatDiv.innerHTML = '<form action="" autocomplete="off">Dire <input autocomplete="off" type="text" name="contenu" style="width: 70%; background-color: white;" id="message"> <input type="submit" value="Envoyer" onclick="sendChat(); return false;"><a title="Liste des smileys" id="modal-smileys" onclick="openPopupExt()"><i>Liste des smileys</i></a></form>'
		}


	}

	return new emoticone () ;
});