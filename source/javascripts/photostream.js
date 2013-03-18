(function () {
	$(document).ready(function (){
		animationLoop();
	});
	function animationLoop(){
		$('#photostream').animate({backgroundPositionX: '-1000px'}, 140000, 'linear',function (){
			$('#photostream').animate({backgroundPositionX: '1000px'}, 140000, 'linear', function(){
				animationLoop();
			});
		});
	};
})();