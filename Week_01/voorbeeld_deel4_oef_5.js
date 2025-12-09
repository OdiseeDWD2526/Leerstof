let catalogus = {
	'A':10,
	'B':5,
	'C':3,
	'D':2,
	'E':4,
};

let bestelnamen = ['A','B','A','C','A','B'];

function plaatsBestelling(catalogus, bestelling){
	let aantal_besteld = {};

	for (let p of bestelling){
		if(p in aantal_besteld){
			aantal_besteld[p]++;
		} else{
			aantal_besteld[p] = 1;
		}
	}

	let totaal = 0;
	let producten = [];
	for(let p in aantal_besteld){
		let itemTotaal = catalogus[p] * aantal_besteld[p];
		totaal += itemTotaal;
		producten.push({'naam': p, 'aantal':aantal_besteld[p], 'totaal': itemTotaal});
	}

	console.log(aantal_besteld);

	return {'totaalPrijs': totaal, 'producten': producten};
}

console.log(plaatsBestelling(catalogus, bestelnamen));
