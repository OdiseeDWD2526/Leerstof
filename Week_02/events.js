const btn_fnc = document.getElementById('clickFunctionButton');
const btn_anon_fnc = document.getElementById('clickAnonymousFunctionButton');
const btn_arrow_fnc = document.getElementById('clickArrowFunctionButton');

const btn_add = document.getElementById('addBtn');
const btn_del = document.getElementById('delBtn');
const btn_click = document.getElementById('clickBtn');

const div_eerste = document.getElementById('div1');
const div_tweede = document.getElementById('div2');
const btn_clickme = document.getElementById('btn');

let counter = 0;

function logger(event){
	counter++;
	console.log(counter);
	console.log(event);
}

btn_fnc.addEventListener('click', logger);
// 3 parameters
// eerste: eventtype -> naar wat moet ik luisteren
// tweede: functie die moet uitgevoerd worden
// derde: default = False

btn_anon_fnc.addEventListener('click', function (event){console.log(event);});
btn_arrow_fnc.addEventListener('click', event => {  
	console.log(event);
});

// remove event listener
btn_add.addEventListener('click', () => {
	btn_click.addEventListener('click', logger);
});

btn_del.addEventListener('click', () => {
	btn_click.removeEventListener('click', logger);
	// remove event listener 2 belangrijke parameters (type event + de listener die verwijderd moet worden)
});

//dit gaat niet werken
// door met naamloze functies te werken heb je elke keer een andere functie (met intern een andere naam)
// omdat je de naam niet kent, kan je de functie ook niet verwijderen
/*btn_add.addEventListener('click', () => {
	btn_click.addEventListener('click', () => console.log('click'));
});

btn_del.addEventListener('click', () => {
	btn_click.removeEventListener('click', () => console.log('click'));
	// remove event listener 2 belangrijke parameters (type event + de listener die verwijderd moet worden)
});
*/

div_eerste.addEventListener('click', (event) => {
	console.log('div1');
	// console.log(event);}
},true);

div_tweede.addEventListener('click', (event) => {
	console.log('div2');
},false);

btn_clickme.addEventListener('click', (event) => {
	console.log('btn');
}, true);
//derde parameter is de useCapture -> gebruik de capture methode ipv de bubble methode