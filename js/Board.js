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
				var r = 0, c = 0,
					w = Math.floor(Game.canvas.height / cols),
					h = Math.floor(Game.canvas.height / rows);

				for (r = 0; r < rows; r++) {
					for (c = 0; c < cols; c++) {
						var cell_params = { width: w, height: h, x: c * w, y: r * h, type: 0 };
						createCell(cell_params);
					}
				}
			}).call(this);

			function createCell(cell_params) {
				var c = new Cell(cell_params);
				cells.push(c);
			}


		// public methods
			this.getCells = function() { return cells; }
	}

	function reset() {}
	function findCell(e) {
		var mx, my,
			G = Game,
			c, cells = G.Board.getCells(),
			cells_length = cells.length;

		if (e.pageX || e.pageY) { mx = e.pageX; my = e.pageY; }
		else {
			mx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			my = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		mx -= G.canvas.offsetLeft;
		my -= G.canvas.offsetTop;

		for (var i = 0; i < cells_length; i++) {
			var _c = cells[i], params = _c.getParams();
			if (mx >= params.x && mx <= params.x + params.width && my >= params.y && my <= params.y + params.height) {
				c = _c;
				/*if (board.firstClick) {
					board.firstClick = false;
					board.generateBombs(_c.id);
				}*/
				break;
			}
		}

		return c;
	}

	Board.prototype.clickListener = function(e) {
		var G = Game, cell = findCell(e);
		cell.changeType(1);
	}

	Board.prototype.draw = function() {
		reset();
		var cells = this.getCells(),
			cells_length = cells.length;
		if (cells_length === 0) { console.log("nothing to draw"); }
		else { 
			for (var i = 0; i < cells_length; i++) { cells[i].draw(); }
			Game.canvas.addEventListener("click", this.clickListener);
		}
	}

	window.Board = Board;

}(window));