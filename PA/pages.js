// JavaScript Document
function ChangeStuff(inp,out_id){
	document.getElementById(out_id).innerHTML=inp
}
function getdata(input_file,divid){
	var servrequest = new XMLHttpRequest();
	servrequest.onreadystatechange=function(){
		if(servrequest.readyState == 4 && servrequest.status == 200){
			ChangeStuff(servrequest.responseText,divid);
			//page_reload();
			
		};
	};
	servrequest.open("GET",input_file,true);
	servrequest.send();
}

function get_home(){
	getdata("./home.html","main")
}
function get_noob(){
	getdata("./noob.html","main")
}
function get_mods(){
	getdata("./mods.html","main")
}
function get_analysis(){
	getdata("./analysis.html","main")
}
function get_units(){
	getdata("./units.html","main")
}
function get_snipes(){
	getdata("./snipes.html","main")
}
function get_comboxing(){
	getdata("./comboxing.html","main")
}