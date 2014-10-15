define ([], function () {
	var equilibrage = {

		virus : {
			tick : 2 // Temps entre chaque coup du virus
		},
		blindFold : {
			duration : 3 // Durée du blindfold
		},
		protocolSecurity : {
			duration : 10 // Durée du protocole
		},
		bomb : {
			duration : 1.5 // Durée de la bombe
		},
		arrows : {
			timer : 3
		},
		rotatingArrow : {
			coeff : 1/3 // Temps de rotation des flêches
		},
		verticalArrow : {
			coeff : 1/3
		},
		horizontalArrow : {
			coeff : 1/3
		},

		flux : {
			baseSpeed : 1.3, // Temps entre deux avancées de cases
			length : 7,
			clickSpeed : 1.225 // Longueur en blocs
		},

		mob : {
			speed : 1.7 // Vitesse des mobs
		},

		teleporter : {
			interval : 1
		}
	};

	return equilibrage;
});