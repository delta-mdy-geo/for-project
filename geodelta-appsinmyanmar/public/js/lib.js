var internsApp = {};

(function(){
function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}

	function fnRead(){
		var path = 'interns/';
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log(snapShot.val());
	  	}
		}
	}
	internsApp.Read = fnRead;
})()
