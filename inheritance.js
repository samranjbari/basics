var Vehicle = function() {
	this.moving = false;
	this.x = 0;
	this.y = 0;
}
Vehicle.prototype.move = function(x, y) {
	this.moving = true;
	this.x = x;
	this.y = y;
}

var G35 = function() {
	Vehicle.call(this);
	this.engine = 'V6';
}
G35.prototype = Object.create(Vehicle.prototype);
G35.prototype.constructor = G35;