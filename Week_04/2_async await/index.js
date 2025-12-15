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