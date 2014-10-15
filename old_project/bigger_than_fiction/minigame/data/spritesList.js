define ([], function () {
	var spritesList = [];


	var spritesId = {

	// Baiscs
		wall : 0,
		empty : 1,
		star : 2,
		triangle : 3,

	// Flux
		redHorizontal : 4,
		redVertical : 5,
		redNO : 6,
		redSO : 7,
		redNE : 8,
		redSE : 9,

		greenHorizontal : 10,
		greenVertical : 11,
		greenNO : 12,
		greenSO : 13,
		greenNE : 14,
		greenSE : 15,

		blueHorizontal : 45,
		blueVertical : 46,
		blueNO : 47,
		blueSO : 48,
		blueNE : 49,
		blueSE : 50,

	// Start/end
		rightStart : 20,
		leftStart : 21,
		upStart : 22,
		botStart : 23,
		end : 24,

	// Bonus/Malus
		accelerator : 25,
		decelerator : 26,
		virus : 27,
		bomb : 31,
		securityProtocol : 32,
		blindFold : 33,
		alarm : 34,
		speedResetter : 35,
		coin : 36,

	// Arrows
		rightArrow : 16,
		downArrow : 17,
		topArrow : 18,
		leftArrow : 19,

		fixedRightArrow : 37,
		fixedDownArrow : 38,
		fixedUpArrow : 39,
		fixedLeftArrow : 40,

		clockwiseArrow : 41,
		horizontalArrow : 54,
		verticalArrow : 55,

	// Portals
		blueFixedPortal : 28,
		redFixedPortal : 29,
		greenFixedPortal : 30,

		blueMobilePortal : 56,
		redMobilePortal : 57,
		greenMobilePortal : 58,

	// Color changers
		blueColorChanger : 42,
		redColorChanger : 43,
		greenColorChanger : 44,

	// Lasers
		horizontalLaser : 51,
		verticalLaser : 52,
		interrupter : 52

	}
		spritesList[0] = [0, 0] // Objet indestructible (mur)
		spritesList[1] = [1, 0] // Case vide
		spritesList[2] = [2, 0] // Etoile
		spritesList[3] = [3, 0] // triangle

		spritesList[4] = [4, 0] // Trait horizontale rouge
		spritesList[5] = [4, 1] // Trait verticale rouge
		spritesList[6] = [5, 0] // Trait top-left rouge
		spritesList[7] = [5, 1] // Trait bot-left rouge
		spritesList[8] = [6, 0] // Trait top-right rouge
		spritesList[9] = [6, 1] // Trait bot-right rouge

		spritesList[10] = [7, 0] // Trait horizontale vert
		spritesList[11] = [7, 1] // Trait verticale vert
		spritesList[12] = [8, 0] // Trait top-left vert
		spritesList[13] = [8, 1] // Trait bot-left vert
		spritesList[14] = [9, 0] // Trait top-right vert
		spritesList[15] = [9, 1] // Trait bot-right vert

		spritesList[16] = [10, 0] // Fleche right
		spritesList[17] = [11, 0] // Fleche bot
		spritesList[18] = [10, 1] // Fleche top
		spritesList[19] = [11, 1] // Fleche left

		spritesList[20] = [4, 2] // Start right
		spritesList[21] = [5, 2] // Start left
		spritesList[22] = [6, 2] // Start top
		spritesList[23] = [7, 2] // Start bot
		spritesList[24] = [8, 2] // END
		
		//items
		spritesList[25] = [9, 2] // Accelerateur
		spritesList[26] = [10, 2] // Ralentisseur
		spritesList[27] = [11, 2] // Virus
		spritesList[28] = [4, 3] // Teleporteur mobile bleue
		spritesList[29] = [5, 3] // Teleporteur mobile rouge
		spritesList[30] = [6, 3] // Teleporteur mobile vert
		spritesList[31] = [7, 3] // Bombe
		spritesList[32] = [8, 3] // Protocol de sécurité
		spritesList[33] = [9, 3] // Blind fold
		spritesList[34] = [10, 3] // Alarme (celle qui va avec le protocol de sécurité)
		spritesList[35] = [11, 3] // Reinitialise la vitesse du flux
		spritesList[36] = [7, 4] // Coin (+100 pts)

		spritesList[37] = [2, 3] // Fleche right FIXE
		spritesList[38] = [3, 3] // Fleche bot FIXE
		spritesList[39] = [2, 4] // Fleche top FIXE
		spritesList[40] = [3, 4] // Fleche left FIXE

		spritesList[41] = [0, 3] // Fleche tournante

		spritesList[42] = [4, 5] // Transformation couleur BLEUE
		spritesList[43] = [5, 5] // Transformation couleur ROUGE
		spritesList[44] = [6, 5] // Transformation couleur VERT

		spritesList[45] = [1, 5] // Trait horizontale bleue
		spritesList[46] = [1, 6] // Trait verticale bleue
		spritesList[47] = [2, 5] // Trait top-left bleue
		spritesList[48] = [2, 6] // Trait bot-left bleue
		spritesList[49] = [3, 5] // Trait top-right bleue
		spritesList[50] = [3, 6] // Trait bot-right bleue

		spritesList[51] = [8, 4] // Laser horizontale
		spritesList[52] = [9, 4] // Laser verticale

		spritesList[53] = [10, 4] // Interupteur bleue qui enlève les lasers

		spritesList[54] = [1, 3] // Fleche tournante horizontale
		spritesList[55] = [1, 4] // Fleche tournante vertical

		spritesList[56] = [4, 4] // Teleporteur fixe mobile
		spritesList[57] = [5, 4] // Teleporteur fixe mobile
		spritesList[58] = [6, 4] // Teleporteur fixe mobile

		spritesList[59] = [7, 5] // mob start right
		spritesList[60] = [8, 5] // mob start left
		spritesList[61] = [9, 5] // mob start top
		spritesList[62] = [10, 5] // mob start bot
		spritesList[63] = [11, 5] // mob

	return {
		list : spritesList,
		ids : spritesId
	};
});