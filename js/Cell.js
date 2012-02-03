(function(window) {
    
	function Cell(params) {
		// private vars
			var width = params.width, height = params.height,
				x = params.x, y = params.y,
				params = params, type = 0;

		// public vars
			this.colour;

		// private methods
			(function init() {
				type = Math.floor(Math.random()*2);
				this.setColour(type);
			}).call(this);

		// public methods
			this.getParams = function() { return params; }
	}

	Cell.prototype.setColour = function(type) {
		switch(type) {
			case 0: this.colour = "rgb(200,200,200)"; break;
			case 1: this.colour = "rgb(255,170,10)"; break;
		}
	}

	Cell.prototype.draw = function() {
		var ctx = Game.ctx,
			params = this.getParams();

			ctx.fillStyle = this.colour;
			ctx.clearRect(params.x, params.y, params.width, params.height);
			ctx.fillRect(params.x, params.y, params.width, params.height);
			ctx.strokeRect(params.x, params.y, params.width, params.height);
	}

	window.Cell = Cell;

}(window));