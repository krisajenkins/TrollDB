var db = {
	"query": function () { return 42; },
	"insert": function () {},
	"update": function () {},
	"delete": function () {},
	"connectToCluster": function () {},
	"executeSQL" : function () {}
};

if (module !== undefined) {
	module.exports = db;
}
