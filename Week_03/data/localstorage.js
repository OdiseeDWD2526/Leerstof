console.log(localStorage.getItem('persoon'));
console.log(localStorage.persoon2);

const persoon = JSON.parse(localStorage.getItem('persoon'));

console.log(persoon.voornaam);
console.log(persoon.kinderen[0].voornaam);

persoon.kinderen.forEach(kind => {
	console.log(kind.voornaam);
});

// rest, spread

const point = [100, 250];
const point2 = [110, 400];

function printPoint(x, y){
	console.log(x);
	console.log(y);
}

// point bevat twee elementen, element[0] -> param1(x), element[1] -> param2(y)
printPoint(...point);

console.log([...point, ...point2]);

function top3(item1, item2, ...rest){
	console.log(item1, item2, rest);
}

top3();
const rij = [1,2,3, 4, 5, 6];
top3(...rij);

const {voornaam, achternaam, ...rest} = persoon;

console.log(voornaam, achternaam);

console.log(rest);

function printPersoon({voornaamFnc, achternaamFnc}){
	console.log(voornaamFnc, 'a', achternaamFnc);
}

printPersoon(persoon);
printPersoon('a');