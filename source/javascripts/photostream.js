(function (window, document) {
	var animationLoop = animationLoopFactory(0.01,0, 'px','photostream');
	animationLoop();
	//IE doesn't allow params for setInterval, create loop from factory via closure.
	window.setInterval(animationLoop, 10);
	function animationLoopFactory(deltaX, deltaY, units, elementId) {
		if (typeof deltaX === "undefined") {
			deltaX = 0;
		}
		if (typeof deltaY === "undefined") {
			deltaY = 0;
		}
		var regx_chopFloatNumber = /[0-9\.]+/;
		var element = document.getElementById(elementId );
		var position = window.getComputedStyle(element).getPropertyValue('background-position').split(' ');
		if(element) {
			if(position) {
				var x = window.parseFloat(regx_chopFloatNumber.exec(position[0]));
				var y = window.parseFloat(regx_chopFloatNumber.exec(position[1]));
				
				var cssIterator = 
				{
					x: x,
					y: y,
					xUnit: '',
					yUnit: '',
					deltaX: deltaX,
					deltaY: deltaY,
					units: units,
					next: function(){
						this.x = this.x + this.deltaX;
						this.y = this.y + this.deltaY;

						if(this.x!==0) {
							this.xUnit = this.units;
						}
						else
						{
							this.xUnit = '';
						}
						if(y!==0) {
							this.yUnit = this.units;
						}
						else
						{
							this.yUnit = '';
						}
						return this.current();
					},
					current: function(){
						return this.formatAsCSS(this.x,this.xUnit,this.y,this.yUnit);
					},
					formatAsCSS: function(x,xUnit,y,yUnit){
						return x + xUnit + " " + y + yUnit;
					}
				};

				return function () {
					element.style.backgroundPosition = cssIterator.next();
				};
			}
		}
	}
})(window, document);
