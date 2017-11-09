(function () {

// Creates and manages the grid in #viewport-box-1

window.addEventListener("load", createGrid, false);

var grid;
var baseBoxSizePx = 25;

function createGrid()
{
	var root = document.getElementById("viewport-box-1");

	var numberOfBoxesX = Math.floor(window.innerWidth / baseBoxSizePx);
	var numberOfBoxesY = Math.floor(window.innerHeight / baseBoxSizePx);

	var boxWidth = baseBoxSizePx + (window.innerWidth % baseBoxSizePx) / numberOfBoxesX;
	var boxHeight = baseBoxSizePx + (window.innerHeight % baseBoxSizePx) / numberOfBoxesY;

	// create an empty 2D array
	grid = [];
	for (var i = 0; i < numberOfBoxesX; ++i)
	{
		grid[i] = [];
	}

	for (var i = 0; i < numberOfBoxesX; ++i)
	{
		for (var j = 0; j < numberOfBoxesY; ++j)
		{
			grid[i][j] = document.createElement("div");
			grid[i][j].className = "grid-box"

			grid[i][j].style.width = Math.ceil(boxWidth) + "px";
			grid[i][j].style.height = Math.ceil(boxHeight) + "px";
			grid[i][j].style.left = (i * boxWidth) + "px";
			grid[i][j].style.top = (j * boxHeight) + "px";

			var intensity = 240 + Math.floor(Math.random() * 16);
			var boxColor = "rgb(" + intensity + ", " + intensity + ", " + intensity + ")"
			grid[i][j].style.backgroundColor = boxColor;
			root.appendChild(grid[i][j]);
		}
	}
}

})();
