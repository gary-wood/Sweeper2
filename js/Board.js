(function(window) {
    
	function Board(params) {
		// private vars
			var height = Game.canvas.height, width = Game.canvas.width,
				cells = [],
				bombs = params.bombs,
				cols = params.cols, rows = params.rows,
				that = this;
		
		// public vars

		// private methods
			// initialise the Board
			(function init() {
				console.log("create cells");
				var r = 0, c = 0,
					w = Math.floor(Game.canvas.height / cols),
					h = Math.floor(Game.canvas.height / rows);

				for (r = 0; r < rows; r++) {
					for (c = 0; c < cols; c++) {
						var cell_params = {
							width: w, height: h,
							x: c * w, y: r * h
						};
						createCell(cell_params);
					}
				}
			}).call(this);

			function createCell(x, y) {
				var c = new Cell(x, y);
				cells.push(c);
			}


		// public methods
			this.getCells = function() { return cells; }
	}

	function reset() {}

	Board.prototype.draw = function() {
		reset();
		var cells = this.getCells(),
			cells_length = cells.length;
		if (cells_length === 0) { console.log("nothing to draw"); }
		else {
			console.log("drawing the board");
			for (var i = 0; i < cells_length; i++) {
				cells[i].draw();
			}
		}	
	}

	window.Board = Board;

}(window));