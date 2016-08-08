var links_on = false;
var json_links;
load_links();
function load_links(){
	var a = new XMLHttpRequest;
	a.onreadystatechange=function(){
		if(a.readyState==4){json_links=JSON.parse(a.responseText);}
	}
	a.open("GET","./the_worlds_greatest_json.json",true)
	a.send();
};

function replace_with_links(){
for(x in json_links){
	if(json_links.hasOwnProperty(x)){
		var a=document.getElementById('main').innerHTML;
		a=a.split(' '+x+' ').join(' '+json_links[x]+' ');
		a=a.split(' '+x+'s').join(' '+json_links[x]+'s ');
		a=a.split('>'+x).join('>'+json_links[x]);
		a=a.split('\n'+x+' ').join('\n'+json_links[x]+' ');
		document.getElementById('main').innerHTML=a;
	}
}
};

function remove_links(){
for(x in json_links){
	if(json_links.hasOwnProperty(x)){
		var a = document.getElementById('main').innerHTML;
		a=a.split(' '+json_links[x]+' ').join(' '+x+' ');
		a=a.split(' '+json_links[x]+'s').join(' '+x+'s ');
		a=a.split('>'+json_links[x]).join('>'+x);
		a=a.split('\n'+json_links[x]+' ').join('\n'+x+' ');
		document.getElementById('main').innerHTML=a;
	}
}
};

function toggle_links(){
if(links_on){
	links_on=false;
	remove_links();
}else{
	links_on=true;
	replace_with_links();
}
};

function page_reload(){
	if(links_on){
		replace_with_links();
	}else{
		remove_links();
	}
}