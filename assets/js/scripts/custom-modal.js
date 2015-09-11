/* Custom modal 
 * Basic custom modal for custom css effects & layout
 * based on: http://tympanus.net/Development/ModalWindowEffects/
 */

$(function() {
	$('.modal-button').click(function(e) {
		e.preventDefault();
		var $modal = $($(this).attr('href'));

		$modal.toggleClass('md-show');
		if($modal.hasClass('md-cover')) {
			$('html').addClass('noscroll');
		}
	});
	
	$('.md-close, .md-overlay').click(function(e) {
		$('.md-show').removeClass('md-show');
		$('html').removeClass('noscroll');
		
	});
	
	$(document).on('keydown', function(e) {
	    var tag = e.target.tagName.toLowerCase();
	        
	    if (tag != 'input' && tag != 'textarea') {
	    	// hide modal on escape
	    	if(e.which === 27 && $('.md-show').length) {
	    		$('.md-show').removeClass('md-show');
	    		$('html').removeClass('noscroll');
	    	}
	    	
	    }
	});
});


/* HTML */
/*
<a href="#equipment-specialists" class="modal-button">Equipment specialists</a>
<!-- md-modal / md-modal md-cover-->
<div id="equipment-specialists" class="md-modal">
	<div class="md-content">
		<h2>Centered</h2>
		<button class="md-close"><i class="icon-close"></i></button>
	</div>
</div>

<div class="md-overlay"></div>
*/

/* CSS */
/*
.md-modal {
	position: fixed; top: 50%; left: 50%; width: 50%; z-index: 2000;
    min-width: 320px; height: auto; visibility: hidden; .backface-visibility; 
	.transform(translateX(-50%) translateY(-50%)); pointer-events: none;
	text-align: left; .fs(18);
	
	@media @desktop {
		width: 940px;
	}
}

.md-cover {
	top: 0; left: 0; width: 100%;
	.transform(none);
	
	.md-content {
		height: 100%; height: 100vh; overflow-y: scroll; 
		.transform(scale(0.9)); 
	}
}

.md-content {
	position: relative; margin: 0 auto; padding: 20px 25px;
	background: @accent; color: #fff;
	.transform(translateY(20%)); opacity: 0; .transition;
	
	a {
		color: #fff;
		&:hover, &:focus { color: #efefef; }
	}
	
	h2, h3, h4, h5, h6 {
		color: #fff;
		a {
			color: #fff;
			&:hover, &:focus { color: #efefef; }
		}
	}
	
	h2 { .fs(20); font-weight: 600; text-transform: uppercase; margin-bottom: 1em; }
	
	ul {
		li:before { border-color: #fff; }
		
		&.arrows {
			li:before { color: #fff; }
		}
	}
	
	.md-close {
		position: absolute; top: 8px; right: 15px;
	}
	
	
	@media @tablet {
		 padding: 40px 45px;
	}
}

.md-show {
	visibility: visible; pointer-events: auto;
	
	.md-content {  
		opacity: 1; .transform(translateY(0));	
	}
	
	~ .md-overlay {
		.opacity(100); visibility: visible;
	}
}

.md-close {
	width: 35px; height: 35px; line-height: 35px; 
	text-align: center; padding: 0; .fs(20);
}

.md-overlay {
	position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 1000;
    visibility: hidden; .opacity(0); background: rgba(0,0,0,0.2); .transition;
}

.noscroll { overflow: hidden; } 
*/