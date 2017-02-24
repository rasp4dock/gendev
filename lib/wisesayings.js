var theSaying = [
    
    "Whenever possible, keep it simple.",
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"We The People are the Universe and the change."

];

exports.getSaying = function(){
    var ts = Math.floor(Math.random() * theSaying.length);
    return theSaying[ts];
};