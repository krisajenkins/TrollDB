var db = {
	"query": function () { return 42; },
	"insert": function () {},
	"update": function () {},
	"delete": function () {}
};

if (module !== undefined) {
  module.exports = db;
}
