console.log('hello world2');

// variabelen en constanten
const ageConst = 35; // dit is een constante
let ageVar = 30; // dit is een variabele
//var ageVarVerouderd = -1; //best dit niet gebruiken, maar werkt zoals een let

// ageConst += 5; werkt niet want ageConst is een constante

/*
let ageLet=31;

{
	ageLet = ageLet + 1;
	console.log(ageLet);
	let firstname='jens';
}

console.log(ageLet);
console.log(firstname);*/

/*var ageLet=31;

{
	ageLet = ageLet + 1;
	console.log(ageLet);
	var firstname='jens'; // deze variabele blijft bestaan buiten deze code-block
}

console.log(ageLet);
console.log(firstname);*/

const rij2 = [1, 2, 3]; // rij2 (idem voor objecten) is een referentie naar een array
// dit wil zeggen dat je de achterliggende lijst kan aanpassen maar geen nieuwe erin steken
// bij het overschrijven met een nieuwe rij pas je namelijk de referentie aan
rij2.push(4);
console.log(rij2);

//rij2 = [1,2,3,4];

// operaties
ageVar += 5;
ageVar -= 6;
ageVar = ageVar * 2;

ageVar = true;
ageVar = 'vijfendertig';

console.log(ageConst, ageVar);

// datatypes

const zin = 'dit is een zin';
const leeftijd = 32;
const gewicht = 76.3;
const mannelijk = true;
const namen = ['pief', 'poef', 'paf'];
const birthdate = new Date();
const leegObject = undefined;
const nullVariabele = null;
const leegobject = null;

console.log(zin, typeof(zin));
console.log(leeftijd, typeof(leeftijd));
console.log(gewicht, typeof(gewicht));
console.log(mannelijk, typeof(mannelijk));
console.log(namen, typeof(namen));
console.log(birthdate, typeof(birthdate));
console.log(leegObject, typeof(leegObject));
console.log(nullVariabele, typeof(nullVariabele));

// object

const obj = new Object();

obj.zin = 'dit is een zin';
obj.leeftijd = 32;
obj.gewicht = 76.3;
obj.mannelijk = true;
obj.namen = ['pief', 'poef', 'paf'];
obj.birthdate = new Date();
obj.leegObject = undefined;
obj.nullVariabele = null;
obj.leegobject = null;
obj['nieuwe variabele'] = 'test';

console.log(obj);

console.log(obj.zin);
console.log(obj['gewicht']);
console.log(obj.gewicht);
console.log(obj['gewicht2']);
//console.log(obj.nieuwe variabele);
console.log(obj['nieuwe variabele']);
let tmp = birthdate.toDateString();
console.log(tmp);
console.log(new Date(2025,11,25,14));

let obj2 = {
	zin : 'tweede zin',
	gewicht2 : obj.gewicht
};  // json notatie

console.log('tweede object', obj2);

const mySelf = {
	lastName: 'Bundervoet',
	surName: 'Jonas',
	age : 25,
	studentHouse : false
};
/*
mySelf = {
	lastName: 'Bundervoet',
	surName: 'Jonas',
	age : 26,
	studentHouse : false
};*/

mySelf.age += 1;
console.log(mySelf.age);

// arrays

console.log(obj.namen[2]);
console.log(obj['namen'][2]);

let rij = obj.namen;

console.log(rij);

console.log(rij[2]); // zoek 1 element in een array

rij[10]='jantje';
console.log(rij);
console.log(rij[6]);

rij.push('jens'); // voeg op het einde een element toe
console.log(rij);

console.log(rij.pop()); // verwijder het laatste element
console.log(rij);

console.log(rij.shift()); // verwijder het eerste element
console.log(rij);

rij.unshift('jens'); // voeg aan het begin een element toe
console.log(rij);

rij[rij.length]='jens'; // gelijk aan rij.push('jens');
console.log(rij);

// Controlestructuren
console.clear();

const maxAge = 100;
const minAge = 18;
let age = 10;

if(age > maxAge){
	console.log('ongeldige leeftijd');
} else if(age <minAge) {
	console.log('te jong');   
} else {
	console.log('geldige leeftijd');
}

let var1 = 3;
let var2 = '3';

if (var1 == var2){
	console.log('var1 == var2 geeft true');
} else {
	console.log('var1 == var2 geeft false');
}

console.log('var1 === var2 geeft', var1===var2); 
// met drie keer = controleert javascript ook het datatype

let fruit = 'kokosnoot';

if(fruit === 'appel'){
	console.log('an apple a day keeps the docter away');
} else if(fruit === 'banaan'){
	console.log('alle apen eten graag bananen');
} else if(fruit=== 'druiven'){
	console.log('van druiven maakt men wijn');
}

switch (fruit){
case 'appel':
	console.log('an apple a day keeps the docter away');
	break;
case 'banaan':
	console.log('alle apen eten graag bananen');
	break;
case 'druiven':
	console.log('van druiven maakt men wijn');
	break;
default:
	console.log('dit fruit ken ik niet');
}