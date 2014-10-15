define (["Timer"], function (Timer) {
	var Flux = function (index, dir, color, speed, length) {
			this.delay = Timer.timerInit(); // Permet au flux d'avancer si this.delay > this.speed
			this.x = index.x; // Position de base x du flux
			this.y = index.y;
			this.dir = dir; // Direction du flux (left - right - top - bot)
			this.color = color; // Couleur du flux (1 = vert, 2 = rouge, 3 = bleue)
			this.speed = speed ; // nb de ms pour faire 1 case
			this.state = 1; // 0 = Le flux est bloqué ; 1 = Le flux ce propage ; 2 = Le flux ce retracte
			this.spreadIndex = new Array(); // Les cases sur lequel le flux c'est déplacé.

			this.fluxLenght = length;

			if ( this.color == 2) {
				if ( this.dir == "left" || this.dir == "right") this.axe = 4; // x
				if ( this.dir == "top"  || this.dir == "bot") this.axe = 5; // y
			} else if ( this.color == 1) {
				if ( this.dir == "left" || this.dir == "right") this.axe = 10; // x
				if ( this.dir == "top"  || this.dir == "bot") this.axe = 11; // y
			} else if ( this.color == 3) {
				if ( this.dir == "left" || this.dir == "right") this.axe = 45; // x
				if ( this.dir == "top"  || this.dir == "bot") this.axe = 46; // y
			} 

			this.spreadIndex[0] = new Array(this.x, this.y, this.axe);
			// Première dimenssion = nb de case sur lequel il c'est propagé
			// 2eme = [x, y]
	};

	return Flux;
});