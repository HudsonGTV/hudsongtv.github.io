ReverseList = (function() {
	var list = $('.reversable-list');
	var listItems = list.children('li');
	list.append(listItems.get().reverse());
});

var hasBeenClicked = false;

$('#toggle').click(function() {
	
	if($('input[name="toggle"]:checked').val()) {
		ReverseList();
		hasBeenClicked = true;
	} else if(!hasBeenClicked) {
		
	} else {
		ReverseList();
	}
	
});