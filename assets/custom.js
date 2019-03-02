jQuery(document).ready(function($) {

	function paper1() {
		$('.paper').addClass('p1');
	}
	function paper0() {
		$('.paper').removeClass('p1');
	}

	// Press the escape key to open nav
	$(document).bind('keyup', function (evt) {
		if (evt.keyCode == 49){
			return (this.tog = !this.tog) ? paper1() : paper0();
		}
	});

});
