var fun = function() {};
var db = {
	"query": function () { return 42; },
	"insert": fun,
	"update": fun,
	"delete": fun,
	"connectToCluster": fun,
	"executeSQL" : fun
};

if (module !== undefined) {
	module.exports = db;
}
