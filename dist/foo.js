var Foo = function Foo() {
	this.bar = 'Hello, World!';
};

Foo.prototype.getBar = function() {
	return this.bar;
}