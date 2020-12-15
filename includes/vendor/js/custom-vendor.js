
jQuery('body').delegate('.btn-range-delete','click',function(){
	if(jQuery('.range-items').find( '.range-item' ).length > 1){
		jQuery( this ).parents( '.range-item' ).remove(); 
	}else{
		alert("Sorry!! You have to added at least one range");
	}
});

jQuery('body').delegate('input[name^=range]','blur',function(){
	
	if(jQuery(this).val() == ''){
		alert("Please enter value");
	}
	else{
		return true;
	}
});
	
