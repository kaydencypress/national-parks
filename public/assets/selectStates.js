// store user-selected states in data that is sent with search form
function recordSelectedState(id){
	var div=document.getElementById("selected_states");
	// remove previous selections
	while (div.hasChildNodes()){
		div.removeChild(div.lastChild);
	}
	setTimeout(function(){
	  // add selections as hidden inputs that will be included in form data
	  $.each(simplemaps_select.selected, function(index, value ){
		var input=document.createElement("input");
		input.type="checkbox";
		input.name="states[]"
		input.value=value;
		input.checked=true;
		input.hidden=true;
		div.append(input);
	}, 100)
	})
}
simplemaps_usmap.plugin_hooks.click_state.push(recordSelectedState);