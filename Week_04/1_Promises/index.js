const restaurantClosed = true;

function executeTask(task, time){
	console.log(task);
	const promise = new Promise((resolve, reject)=> {

		if(restaurantClosed){
			reject('restaurant closed');
		} else {

			setTimeout(()=> { resolve();},time);
		}

	});

	return promise;
}


function orderPizza(size, saus, toppings){

	executeTask('bestelling plaatsen', 2000)
		.then(()=>{
			return executeTask(`Maak deeg voor ${size} pizza`, 2000);
		})
		.then(()=>{
			return executeTask(`Smeer ${saus} op pizza`, 1000);
		})
		.then(()=>{
			return executeTask(`beleg pizza met ${toppings.join()}`, 5000);
		})
		.then(()=>{
			return executeTask('Pizza in de oven',10000);
		})
		.then(()=>{
			return executeTask('kies doos',2000);
		})
		.then(()=>{
			return executeTask('bestelling leveren',1000);
		})
		.then(()=>{
			console.log('bestelling geleverd');
		})
		.catch(()=> {
			console.log('het restaurant is gesloten');
		});
}


orderPizza('large', 'tomatensaus', ['ham', 'spek', 'mozzerella']);



// Voorbeeld promise.all.

const pokemon1 = fetch('https://pokeapi.co/api/v2/pokemon');
const pokemon2 = fetch('https://pokeapi.co/api/v2/pokemon?offset=20');

Promise.all([pokemon1, pokemon2]).then((responses)=> {
	const jsons = responses.map((response) => response.json());
	return Promise.all(jsons);
}).then((jsons)=> {
	jsons.forEach(e=> console.log(e));
});