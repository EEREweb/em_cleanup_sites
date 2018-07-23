		//function drawGraphic (width) { console.log(width); };
		//var pymChild = new pym.Child({renderCallback: drawGraphic});

		$(document).ready( function () {
            	var pymChild = new pym.Child({ id: 'mapObj', polling: 10 });
            	pymChild.sendHeight();
		});
