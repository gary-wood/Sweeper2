var Game = {
    canvas: document.getElementById("sweeper"),
	ctx: null,
	Board: null,
	difficulty: function(level) {
		switch (level) {
			case 0: return { cols: 8, rows: 8, mines: 10 }; break;
			case 1: return { cols: 14, rows: 14, mines: 20 }; break;
		}		
	},
	init: function(difficulty) {
		var G = this,
			difficulty = difficulty || 0;
		
		// check if the browser is compatible
		if (G.canvas.getContext) {
			G.ctx = G.canvas.getContext("2d");
			var params = G.difficulty(difficulty);
			G.Board = new Board(params);
			G.Board.draw();
		}
	}
};