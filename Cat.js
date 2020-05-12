function Cat(name) {
	this.name = name;
	this.stomach = [];
};

Cat.prototype.eat = function(mouse) {
	stomach.push(mouse);
};

var tom = new Cat('tom');

module.exports = Cat;