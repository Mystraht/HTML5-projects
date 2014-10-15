function GAMErefresh() { // Handling & drawing all button object on canvas
	transitionEffect.refresh();
	switch (game_state) {
		case "mainMenu":
			ctx.drawImage(backgroundImg, 0,0, screenSize.x, screenSize.y); // baclground drawing
			GUIrefresh();
			logo_main_menu_obj.refresh();
			music_main_menu.play();
		break;
		case "playing":
			ctx.drawImage(background_pg_Img, 0,0, screenSize.x, screenSize.y); // baclground drawing
			playground.refresh();
			BOXrefresh();
			music_playing.play();
		break;
		case "scores":
			
		break;
	}
}
