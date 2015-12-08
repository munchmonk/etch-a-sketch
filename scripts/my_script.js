outerDiv = "<div class='outer'></div>";
innerDiv = "<div class='inner'></div>";

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

	$('.inner').hover(function() {
		$(this).addClass('yellow');
	});
}

function removeGrid() {
	$('.outer').remove();
}

function resetGrid() {
	removeGrid();
	n = prompt("New grid size:");
	createGrid(n);
}

defaultN = 16;
createGrid(defaultN);





