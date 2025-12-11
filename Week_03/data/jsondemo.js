// javascript object
const persoonObj = {
	voornaam: 'Jens',
	achternaam: 'Baetens',
	leeftijd: 34,
	kinderen: [
		{
			voornaam: 'Poef',
			leeftijd: 2
		},{
			voornaam: 'Paf',
			leeftijd: 0.5
		}
	]
};

console.log(persoonObj);
console.log(JSON.stringify(persoonObj));


const persoonStr = JSON.stringify(persoonObj);

console.log(persoonStr);
console.log(JSON.parse(persoonStr));

//localStorage.setItem('key', 'value');
localStorage.setItem('persoon', persoonStr);
localStorage.persoon2 = persoonStr;