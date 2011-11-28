var parseAddItemForm = function(data){
		//uses data here
		console.log(data);
};




$(document).ready(function(){

	var aiform= $("#additem"),
		rcerrorlink= $("#rcerrors")
	;
	aiform.validate({
		invalidHandler: function(form, validator){
			rcerrorslink.click();
			var html = "";
			for(key in validator.submitted){
				var label =$("label for^=[""+ key +""]").not["generated"];
				var legend =label.closest("fieldset").find(".ui-controlgroup-label");
				var fieldName = legend.length ? legend.text() : labels.text()
				html += "<li>" + fieldName + "</li>";
			};
			$("#additem ul").html(html);
		},
		submitHandler: function(){
			var data= aiform.serializeArray();
			parseAddItemForm(data);
		}
	});
});


