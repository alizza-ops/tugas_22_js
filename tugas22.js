function arrayForEach(){
	var string="Saya ingin belajar bersama";
	var data=string.split(" ");
	data.forEach(function(item,index,array){
		console.log("Item : "+item+" Index ke "+index);
	});
};

arrayForEach();