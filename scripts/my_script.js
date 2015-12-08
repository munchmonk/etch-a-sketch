function createGrid(n) {
	for (i = 0; i < n; i++)
		$('body').append(outerDiv);
	for (i = 0; i < n; i++)
		$('.outer').append(innerDiv);

	defaultHeight = defaultN * parseInt($('.inner').css('height'), 10) + 'px';
	defaultWidth = defaultN * parseInt($('.inner').css('width'), 10) + 'px';
	cellWidth = parseInt(defaultWidth, 10) / n + 'px';
	cellHeight = parseInt(defaultHeight, 10) / n + 'px';
	$('.inner').css({'width': cellWidth, 'height': cellHeight});
	$('.outer').css('height', cellHeight);

	// I add an empty function so it doesn't darken twice (mouseIn and mouse Out)
	$('.inner').hover(function() {
		if ($(this).css('background-color') === 'rgb(255, 255, 255)')
			initializeRandomColor($(this));
		else
			darken($(this));
	}, function() {		
	});
}

function initializeRandomColor(cell) {
	r = parseInt(Math.random() * 256);
	g = parseInt(Math.random() * 256);
	b = parseInt(Math.random() * 256);
	cell.css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')');
}

function darken(cell) {
	rgbString = cell.css('background-color');
	rgbString = rgbString.slice(rgbString.indexOf('(') + 1, rgbString.indexOf(')'));
	rgbArray = rgbString.split(',');
	r = rgbArray[0];
	g = rgbArray[1];
	b = rgbArray[2];

	r = parseInt(r - (r / 10), 10);
	g = parseInt(g - (g / 10), 10);
	b = parseInt(b - (b / 10), 10);
	cell.css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')');

}

function removeGrid() {
	$('.outer').remove();
}

function resetGrid(resize) {
	removeGrid();
	if (resize === true) {
		n = prompt("New grid size:");
		currentN = n;
	}
	else
		n = currentN;
	createGrid(n);
}

outerDiv = "<div class='outer'></div>";
innerDiv = "<div class='inner'></div>";
defaultN = 16;
currentN = defaultN;
$(document).ready(createGrid(currentN));