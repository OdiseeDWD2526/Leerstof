
function step1() {
	console.log('step 1');
}

function step2() {
	console.log('step 2');
}

function step3() {
	console.log('step 3');
}

function step4() {
	console.log('step 4');
}

function step5() {
	console.log('step 5');
}

// synchroon
/*step1();
step2();
step3();
step4();
step5();
*/

// asynchroon met setTimeout(functie,time)
setTimeout(step1, 3000);
setTimeout(step2, 1000);
setTimeout(step3, 2000);
setTimeout(step4, 3000);
setTimeout(step5, 1500);

/* asynchroon: pizza demo (Callback hell)
Bestelling plaatsen => 2s
Deeg maken => 2s
Saus smeren => 1s
Beleggen met toppings => 5s
In de oven plaatsen => 10s
Doos kiezen => 2s
Bestelling leveren => 1s
*/

setTimeout(() => {
	console.log('bestelling geplaatst');

	setTimeout(() => {
		console.log('deeg maken');

		setTimeout(() => {
			console.log('saus smeren');

			setTimeout(() => {
				console.log('belegd met toppings');

				setTimeout(() => {
					console.log('uit de oven');

					setTimeout(() => {
						console.log('doos ligt klaar')

						setTimeout(() => {
							console.log('bestelling geleverd');
						}, 1000);
					}, 2000);
				}, 10000);
			}, 5000);
		}, 1000);
	}, 2000);

}, 2000);

