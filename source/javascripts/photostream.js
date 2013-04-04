(function () {
	var animationLoop = animationFactory(0.01,0)
	animationLoop();
	window.setInterval(animationLoop, 10);
	function animationFactory(deltaX, deltaY) {
		return function () {
			(function (deltaX, deltaY) {
				if (typeof deltaX === "undefined") {
					deltaX = 0;
				}
				if (typeof deltaY === "undefined") {
					deltaY = 0;
				}
				var element = document.getElementById('photostream');
				var position = window.getComputedStyle(element).getPropertyValue('background-position').split(' ');
				
				var pattern = /[0-9\.]+/;
				
				var x = window.parseFloat(pattern.exec(position[0]));
				var y = window.parseFloat(pattern.exec(position[1]));
				x = x + deltaX;
				y = y + deltaY;
				
				if(x===0) {
					var xUnit = "";
				}
				else {
					var xUnit = position[0].split(pattern)[1];
				}
				if(y===0) {
					var yUnit = "";
				}
				else {
					var yUnit = position[1].split(pattern)[1];
				}
				
				element.style.backgroundPosition = x + xUnit + " " + y + yUnit;
			})(deltaX, deltaY);
		}
	}
})();
