(function(window) {
    
	function Cell(params) {
		// private vars
			var width = params.width, height = params.height,
				x = params.x, y = params.y,
				type = params.type;

		// public vars
			this.colour;

		// private methods
			(function init() {
				this.setColour(type);
			}).call(this);

		// public methods
			// getters
				this.getParams = function() { return params; }

			// setters
				this.setType = function(n) {
					var current_type = type;
					if (current_type !== n) { type = n; }
				}
	}

	Cell.prototype.setColour = function(type) {
		switch(type) {
			case 0: this.colour = "rgba(200,200,200,1)"; break; /* default */
			case 1: this.colour = "rgba(0,100,255,1)"; break; /* cleared */
			case 2: this.colour = "rgba(255,170,10,1)"; break; /* flagged */
		}
	}

	Cell.prototype.changeType = function(n) {
		this.setType(n);
		this.setColour(n);
		this.draw();
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