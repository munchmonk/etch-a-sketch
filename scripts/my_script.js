outerDiv = "<div class='outer'></div>";
innerDiv = "<div class='inner'></div>";
for (i = 0; i < 16; i++)
	$('body').append(outerDiv);
for (i = 0; i < 16; i++)
	$('.outer').append(innerDiv);

$('.inner').hover(function() {
	$(this).addClass('yellow');
});