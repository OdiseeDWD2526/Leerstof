async function doSomething( ){
	const output =  await new Promise((resolve, reject)=> {
		setTimeout(()=>resolve('demo'),10000);
	});

	console.log(output);
}

//doSomething();

/* asynchroon: pizza demo met async await
Bestelling plaatsen => 2s
Deeg maken => 2s
Saus smeren => 1s
Beleggen met toppings => 5s
In de oven plaatsen => 10s
Doos kiezen => 2s
Bestelling leveren => 1s


Extra: hoe werkt de catch?
*/
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

async function orderPizza(size, saus, toppings){

	try {	
		await executeTask('bestelling plaatsen', 2000);
		await executeTask(`Maak deeg voor ${size} pizza`, 2000);
		await executeTask(`Smeer ${saus} op pizza`, 1000);
		await executeTask(`beleg pizza met ${toppings.join()}`, 5000);
		await executeTask('Pizza in de oven',10000);
		await executeTask('kies doos',2000);
		await executeTask('bestelling leveren',1000);	
	} catch (error) {
		console.log('het restaurant is gesloten');
	}
}

//orderPizza('large', 'tomatensaus', ['ham', 'spek', 'mozzerella']);

//console.log('test');

async function getPokemons(){
	let response = await fetch('https://pokeapi.co/api/v2/pokemon');
	let json = await response.json();
	console.log(json);
}

getPokemons();