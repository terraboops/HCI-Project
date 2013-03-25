(function () {
	animationLoop(0.01);
	window.setInterval(animationLoop, 10, 0.01);
	function animationLoop(deltaX, deltaY){
		if (typeof deltaX === "undefined")
		{
			deltaX = 0;
		}
		if (typeof deltaY === "undefined")
		{
			deltaY = 0;
		}
		var element = document.getElementById('photostream');
		var position = window.getComputedStyle(element).getPropertyValue('background-position').split(' ');
		var pattern = /[0-9\.]+/;
		var x = window.parseFloat(pattern.exec(position[0]));
		var y = window.parseFloat(pattern.exec(position[1]));
		var xUnit = position[0].split(pattern)[1];
		var yUnit = position[1].split(pattern)[1];
		x = x + deltaX;
		y = y + deltaY;
		element.style.backgroundPosition =x+xUnit+" "+y+yUnit;
	};
})();