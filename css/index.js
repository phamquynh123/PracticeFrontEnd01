$(function(){
	$(".item").mouseover(function() {
		$("#content-left").css("width","61%");
		$("#content-left").css("margin-left","18%");
	});
	$(".item").mouseout(function() {
		$("#content-left").css("width","79%");
		$("#content-left").css("margin-left","0");
	});
	$(".iconnn").on("click", function(){
		$("#menu").css("display", "block");
		$("#menu").css("width", "100%");
	})
})


// cái này dùng cho menu
$(function() {
	$('nav#menu').mmenu({
		extensions	: [ 'fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-white' ],
		iconPanels	: true,
		counters	: true,
		keyboardNavigation : {
			enable	: true,
			enhance	: true
		},
		searchfield : {
			placeholder	: 'Search menu items'
		},
		navbar : {
			title : 'Advanced menu'
		},
		navbars	: [
		{
			position	: 'top',
			content		: [ 'searchfield' ]
		}, {
			position	: 'top',
			content		: [ 'breadcrumbs', 'close' ]
		}, 
		]
	}, {
		searchfield : {
			clear : true
		}
	});
});