define([],
function () {
	var chooseCard = function () {

	}

	chooseCard.prototype.choose = function (id) {
		$.post( "http://www.loups-garous-en-ligne.com/ajax/chooseMyCard.php", {"cardId": id }, function(retour) { } );
	}

	return new chooseCard () ;
});