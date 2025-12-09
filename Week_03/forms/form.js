const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');

const select = document.getElementById('select');
const opmerkingen = document.getElementById('opmerkingen');

const password = document.getElementById('password');
const ulErrors = document.getElementById('errors');

// zoeken van het formulier
const forms = document.forms;
console.log(forms);
const form1 = forms.loginForm; // loginform is het id van het form
console.log(form1.username.value);

//const btnSubmit = document.getElementById('sendbtn');

radio1.addEventListener('click', () => {
	// aanvinken van radio1
	select.setAttribute('disabled', '');
	select.removeAttribute('required');

	opmerkingen.setAttribute('required', '');
	opmerkingen.removeAttribute('disabled');
});

radio2.addEventListener('click', () => {
	// aanvinken van radio2
	opmerkingen.setAttribute('disabled', '');
	opmerkingen.removeAttribute('required');

	select.setAttribute('required', '');
	select.removeAttribute('disabled');
});

form1.addEventListener('submit', (event) => {
	//event.preventDefault(); // -> deze functie gaat het normaal gedrag van het submit onderbreken (voor dit formulier)
	event.stopPropagation(); // -> is om aan te geven dat het event niet meer naar andere (parents) elementen doorgegeven wordt
	// wordt vaak gebruikt om te zeggen dat het event in deze functie afgehandeld wordt en andere er niet meer naar moeten kijken
	console.log('submitted');

	let valid=true;
	console.log(form1.email.validity);
	// check of het passwoord 3 of meer karakters is
	if(form1.password.value.length <= 2){
		valid = false;

		// manier 1 om output te maken voor de gebruiker om aan te geven wat er mis is
		const li = document.createElement('li');
		li.innerText='password is invalid';
		ulErrors.append(li);

		// manier 2
		form1.password.setCustomValidity('Het wachtwoord moet minstens 3 karakters bevatten');
		form1.password.reportValidity();
	} else if(form1.email.validity.patternMismatch){
		form1.email.setCustomValidity('Het email adres moet eruit zien als {je naam}@student.odisee.be');
		form1.email.reportValidity();
		valid=false;
	}

	console.log('valid', valid);
	if(!valid){
		//verstuur de data niet
		event.preventDefault();
	}
});

password.addEventListener('input', (event)=>{ // input wordt opgeroepen bij elke aanpassing van de value van een input veld
	console.log('input changed to', password.value);
	if(password.value.length < 3){
		form1.password.setCustomValidity('Het wachtwoord moet minstens 3 karakters bevatten');
		form1.password.reportValidity();
	} else {
		form1.password.setCustomValidity(''); // met lege tekst wordt de foutboodschap verwijderd
		form1.password.reportValidity();
	}
});

password.addEventListener('blur', (event)=>{ // blur wordt gecontroleer bij het verlaten van het element
	console.log('input changed to', password.value);
	if(password.value.length < 3){
		form1.password.setCustomValidity('Het wachtwoord moet minstens 3 karakters bevatten');
		form1.password.reportValidity();
	} else {
		form1.password.setCustomValidity('');
		form1.password.reportValidity();
	}
});


password.addEventListener('focus', (event)=>{ // focus wordt uitgevoerd bij het activeren van het element
	password.value = '';
});

/*
beter niet om het aan de button te hangen in een form
btnSubmit.addEventListener('click', (event)=>{
    console.log('click');
    event.stopPropagation();
});
*/

// a@student.odisee.be