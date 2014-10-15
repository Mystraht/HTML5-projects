define (["config", "debug", "resources/resourceManager", "rendering/drawer", "gameTime"], 
function (config, debug, res, drawer, gameTime) {
	var SpriteRenderer = function (package, sprite, coords) {
		this.coords = coords;

		this.currentStep = 0;
		this.currentState = undefined;
		this.currentDir = undefined;
		this.package = package;
		this.spriteID = sprite;
		this.sprite = res.Get(package, sprite);
		this.loaded = false;
		
		// Si la sprite est pas chargée, on balance le placeholder
		if (this.sprite == false) {
			this.CreatePlaceholder();
		} else {
			this.loaded = true;
			this.SetDefaultAnim();
		}

		this.Animate();
		this.lastAnimation = gameTime.currentTime;
	};

	SpriteRenderer.prototype.SetDefaultAnim = function () {
		var defaultAnim = this.sprite.GetDefaultAnim();
		if (this.currentState == undefined) {
			this.currentState = defaultAnim.state;
		}
		if (this.currentDir == undefined) {
			this.currentDir = defaultAnim.dir;
		}
		if (this.currentStep == undefined) {
			this.currentStep = 0;		
		}
	};

	SpriteRenderer.prototype.CreatePlaceholder = function () {
		var that = this;
		var loadRealSprite = function () {

			var spr = res.Get(that.package, that.spriteID);
			if (spr) {
				that.loaded = true;
				that.sprite = spr;
				that.SetDefaultAnim();
			}
			else setTimeout(loadRealSprite, 500);
		}
		this.sprite = res.Get(config.graphicPlaceholder.package, config.graphicPlaceholder.id);
		this.placeholderStep = 0;
		var placeholderDefault = this.sprite.GetDefaultAnim();
		this.placeholderState = placeholderDefault.state;
		this.placeholderDir = placeholderDefault.dir;
		this.placeholderStep = 0;
		setTimeout(loadRealSprite, 500);		
	};

	SpriteRenderer.prototype.ChangeSpriteCase = function (kase) {
		debug.loopVLog("SpriteRenderer", "Change case", kase);
		this.currentCase = kase;
		if (kase.x >= this.sprite.caseWidth ) {
			kase.x = this.sprite.caseHeight - 1;
			debug.warn("SpriteRender", "Case out of bounds");
		}
		if (kase.y >= this.sprite.height) {
			kase.y = this.sprite.height -1;
			debug.warn("SpriteRenderer", "Case out of bounds");
		}
		this.spriteCoords = this.sprite.GetCoordinates(this.currentCase);
	};

	SpriteRenderer.prototype.ChangeState = function (state) {
		this.currentState = state;
	};
	SpriteRenderer.prototype.ChangeDir = function (dir) {
		this.currentDir = dir;
	};

	SpriteRenderer.prototype.Render = function () {
		var draw = {
			sx : this.spriteCoords.x,
			sy : this.spriteCoords.y,
			sw : this.spriteCoords.w,
			sh : this.spriteCoords.h,
			dx : this.coords.x,
			dy : this.coords.y,
			dw : this.coords.w,
			dh : this.coords.h
		};
		drawer.DrawImage(this.sprite.obj, draw);
	};

	SpriteRenderer.prototype.Animate = function () {
		var step;
		var state;
		var dir;
		if (this.loaded) {
			step = this.currentStep;
			state = this.currentState;
			dir = this.currentDir;
		} else {
			step = this.currentStep;
			state = this.placeholderState;
			dir = this.placeholderDir;
		}
		var animation = this.sprite.GetAnim(step, state, dir);
		if (gameTime.currentTime - this.lastAnimation > animation.pace) {
			this.currentStep++;
			this.currentStep %= animation.width;
			this.lastAnimation = gameTime.currentTime;
		}

		this.ChangeSpriteCase({
			x : step,
			y : animation.y
		});

	};

	return SpriteRenderer;
});