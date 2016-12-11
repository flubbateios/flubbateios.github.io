function process(i, alias) {
	var c = i.split('\n');
	for (var x in c) {
		var t = c[x];
		t="say "+t
		t = t.split('"').join("'");
		t = t.split(';').join(' -');
		c[x] = t;

	};
	var commands = '';
	commands += "alias " + alias + " " + alias + "0\n";
	for (var x in c) {
		var a = c[x];
		var n = alias + x.toString();
		var m = alias + (parseInt(x) + 1).toString();
		var f;
		if (x != c.length - 1) {
			f = 'alias "' + n + '" "' + a + '; alias ' + alias + ' ' + m + '"\n';
		} else {
			f = 'alias "' + n + '" " alias ' + alias + ' ' + alias + "0" + '"\n'
		}
		commands+=f

	}
	return commands;
}

var model = new (function(){
	var self = this;
	self.input=ko.observable('Put your stuff \n Here!');
	self.alias = ko.observable('PutYourAliasHere');
	self.output = ko.computed(function(){
		return process(self.input(),self.alias());
		
	})
	
	
})();
$(document).ready(function(){
	ko.applyBindings(model);
})
