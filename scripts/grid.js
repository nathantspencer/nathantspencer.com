(function () {

// GRID.JS
// Creates and manages the color grid in #viewport-box-1

window.addEventListener("load", createGrid, false);
window.addEventListener("resize", createGrid, false);

var grid = [];
var boxSize = 25;
var numberOfBoxesX;
var numberOfBoxesY;

var grayRange = [225, 232];

// Creates a grid of the current window size or expands existing grid
function createGrid()
{
	var root = document.getElementById("viewport-box-1");

	numberOfBoxesX = Math.ceil(window.innerWidth / boxSize);
	numberOfBoxesY = Math.ceil(window.innerHeight / boxSize);

	for (var i = 0; i < numberOfBoxesX; ++i)
	{
		if(i >= grid.length)
		{
			grid[i] = []
		}

		for (var j = grid[i].length; j < numberOfBoxesY; ++j)
		{
			grid[i][j] = document.createElement("div");
			grid[i][j].className = "grid-box"
			grid[i][j].x = i;
			grid[i][j].y = j;

			grid[i][j].style.width = boxSize + "px";
			grid[i][j].style.height = boxSize + "px";
			grid[i][j].style.left = (i * boxSize) + "px";
			grid[i][j].style.top = (j * boxSize) + "px";
			grid[i][j].style.backgroundColor = grayInRange(grayRange[0], grayRange[1]);

			grid[i][j].addEventListener("mouseover", mouseFieldEffect, false);
			root.appendChild(grid[i][j]);
		}
	}
}

// Callback that creates a field effect on the grid
function mouseFieldEffect(e)
{
	for (var i = -1; i < 2; ++i)
	{
		var gridBox = grid[e.target.x + i][e.target.y];
		gridBox.style.backgroundColor = grayInRange(grayRange[0], grayRange[1]);
	}

	for (var j = -1; j < 2; ++j)
	{
		var gridBox = grid[e.target.x][e.target.y + j];
		gridBox.style.backgroundColor = grayInRange(grayRange[0], grayRange[1]);
	}
}

// Takes two colors (rgb array[3]) and returns a random color between
function colorInRange(minColor, maxColor)
{
	rangeR = maxColor[0] - minColor[0];
	rangeG = maxColor[1] - minColor[1];
	rangeB = maxColor[2] - minColor[2];

	rgb = [];
	rgb[0] = minColor[0] + Math.floor(Math.random() * rangeR);
	rgb[1] = minColor[1] + Math.floor(Math.random() * rangeG);
	rgb[2] = minColor[2] + Math.floor(Math.random() * rangeB);

	result = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
	return result;
}

// Takes two intensities and returns a random grayscale in that rangeB
function grayInRange(minIntensity, maxIntensity)
{
	range = maxIntensity - minIntensity;
	intensity = minIntensity + Math.floor(Math.random() * range);
	result = "rgb(" + intensity + ", " + intensity + ", " + intensity + ")";
	return result;
}

})();
