$.urlParam = function(name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if(results == null) {
		return null;
	} else {
		return results[1] || 0;
	}
}

$(document).ready(function() {
	
	$.ajax({
		type : 'GET',
		dataType : 'xml',
		url : ('http://repo.hudsongreen.com/depic/Themes/' + $.urlParam('package') + '/info.xml'),
		success : function(xml) {
			
			var description = $(xml).find('package>description').text();
		},
		cache : false,
		error: function() {
			console.log('ERROR: Could not load XML file!');
		}
	}); //ajax
}); // ready