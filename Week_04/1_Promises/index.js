const restaurantClosed = false;

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
	console.log('test');
}


orderPizza('large', 'tomatensaus', ['ham', 'spek', 'mozzerella']);



// Voorbeeld promise.all.
fetch('https://pokeapi.co/api/v2/pokemon').then((x) =>{
	return x.json();
}).then((json) => {
	console.log(json);
});
