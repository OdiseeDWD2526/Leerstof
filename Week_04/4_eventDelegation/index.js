// de tbody van de tabel waarin onze producten geplaatst gaan worden
const productenTabel = document.getElementById('productenTabel');

// waar het aantal geselecteerde items in gaat verschijnen
const geselecteerd = document.getElementById('geselecteerd');

// waar de totaalprijs in zal geplaatst worden
const totaalPrijsEle = document.getElementById('totaalPrijs');

// wat we gaan gebruiken om de geselecteerde producten bij te houden
let winkelkar = {};

// de lijst met onze productgegevens. Later haal je dit soort gegevens op 
// uit een API
const gegevens = [
	{"PR_ID":112,"PR_CT_ID":1,"PR_naam":"Appel","PR_prijs":10},
	{"PR_ID":113,"PR_CT_ID":2,"PR_naam":"Granaatappel","PR_prijs":20},
	{"PR_ID":114,"PR_CT_ID":2,"PR_naam":"Boemkool","PR_prijs":15},
	{"PR_ID":133,"PR_CT_ID":1,"PR_naam":"Banaanaanwagen","PR_prijs":10},
	{"PR_ID":132,"PR_CT_ID":1,"PR_naam":"Framboos","PR_prijs":3},
	{"PR_ID":131,"PR_CT_ID":2,"PR_naam":"Andrijvie","PR_prijs":1.5},
	{"PR_ID":123,"PR_CT_ID":1,"PR_naam":"Bananasplit","PR_prijs":5},
	{"PR_ID":122,"PR_CT_ID":1,"PR_naam":"Hanananas","PR_prijs":5},
	{"PR_ID":121,"PR_CT_ID":1,"PR_naam":"Zuurpruim","PR_prijs":100},
	{"PR_ID":124,"PR_CT_ID":2,"PR_naam":"Ui","PR_prijs":2},
	{"PR_ID":130,"PR_CT_ID":1,"PR_naam":"Skiwi","PR_prijs":2},
	{"PR_ID":126,"PR_CT_ID":1,"PR_naam":"Spruitjes","PR_prijs":5},
	{"PR_ID":127,"PR_CT_ID":1,"PR_naam":"GestoofdePeren","PR_prijs":5},
	{"PR_ID":128,"PR_CT_ID":1,"PR_naam":"Gebakken peren","PR_prijs":10},
	{"PR_ID":135,"PR_CT_ID":2,"PR_naam":"Spinazie","PR_prijs":1.23},
	{"PR_ID":136,"PR_CT_ID":2,"PR_naam":"Spruiten","PR_prijs":3},
	{"PR_ID":137,"PR_CT_ID":2,"PR_naam":"Schorseneren","PR_prijs":5},
	{"PR_ID":145,"PR_CT_ID":1,"PR_naam":"Pampelmous","PR_prijs":2}
];

const gegevensObj = {
	112:{naam: 'appel', prijs: 10},
	113:{naam: 'granaatappel', prijs: 20},
	/*112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},
	112:{},*/
}


// Vul de productenTabel met de gegevens die we hebben
toonGegevens();

//loadWinkelkar();
//updateWinkelkar();

function saveWinkelkar(){
	localStorage.setItem('winkelkar', JSON.stringify(winkelkar));
}
/*
async function loadWinkelkarFromDatabase(){
	try {
		const response = await fetch('mijn.server.com/winkelkar/userid'); // voeg authorizatie toe
		
		if(response.ok){
			const json = await response.json();
			winkelkar = json.winkelkar;
		}
	} catch (error) {
		// notify of server error;
	} 
} */

function loadWinkelkar(){
	console.log(localStorage.getItem('winkelkar'));
	if(localStorage.getItem('winkelkar'))
		winkelkar = JSON.parse(localStorage.getItem('winkelkar'));
}

function updateWinkelkar() {
	// bereken totaal aantal producten
	let aantalGeselecteerd = 0;
	// bereken de totale prijs
	let totaalPrijs = 0;
	for(const id in winkelkar){
		aantalGeselecteerd += winkelkar[id];

		totaalPrijs += gegevensObj[id].prijs * winkelkar[id];
/*
		for(const p of gegevens){
			if(p.PR_ID == id){
				totaalPrijs += winkelkar[id] * p.PR_prijs;
			}
		}
*/		
		productenTabel.querySelector('#data-aantal-' + id).innerText = winkelkar[id];
	}

	// toon deze waarden doen
	geselecteerd.innerText = aantalGeselecteerd;
	totaalPrijsEle.innerText = totaalPrijs;

	saveWinkelkar();
}

function addProduct(id) {
	console.log(winkelkar);

	// als het product niet in het winkelmandje staat, voeg het toe
	if(!winkelkar[id]){
		// id bestaat niet in de dictionary
		winkelkar[id] = 1;
	} else{
		// anders moet je het aantal + 1 doen
		winkelkar[id]++;
	}

	// aantal in de tabel updaten
	// document.querySelector('#data-aantal-' + id).innerText = winkelkar[id];
	// dit kan lichtjes geoptimaliseerd worden door te zeggen in welk element het moet gezocht worden
	// in dit geval weten we dat het in de tabel met producten zit dus kunnen we dit nemen als startpunt
	//productenTabel.querySelector('#data-aantal-' + id).innerText = winkelkar[id];

	// winkel kar updaten (geselecteerd en prijs)
	updateWinkelkar();
}

function removeProduct(id) {

	// als het product niet in het winkelmandje staat, doe niets
	if(!winkelkar[id] || winkelkar[id] == 0){
		return;
	} else{
		// als het wel bestaat -> verwijderen we het als er exact 1 in zit
		winkelkar[id]--;
	}

	productenTabel.querySelector('#data-aantal-' + id).innerText = winkelkar[id];

	// winkel kar updaten (geselecteerd en prijs)
	updateWinkelkar();
}

productenTabel.addEventListener('click', (event) => {
	// deze gaat kijken welke actie er moet uitgevoerd worden
	const action = event.target.getAttribute('data-action');
	const pid = event.target.getAttribute('data-id');

	if(action=== 'add'){
		addProduct(pid);
	} else if(action ==='remove'){
		removeProduct(pid);
	}

	console.log(action, pid);

});



function toonGegevens() {
  
	// we werken hier met string concatenatie
	// merk op dat we slechts 1 DOM-update, nadat we door alle gegevens hebben gelopen
	let tijdelijkeString = '';
  
	for(const id in gegevensObj){
		let record = gegevensObj[id];

		tijdelijkeString += `
      <tr>
        <td>${record.naam}</td>
        <td>${record.prijs}</td>
        <td id='data-aantal-${id}'></td>
        <td>
        
          <a class='btn text icon-left' data-id='${id}' data-action='add'>
            <i class="large material-icons" data-id='${id}' data-action='add'>add</i>
          </a>
          
          <a class='btn text icon-left' data-id='${id}' data-action='remove'>
            <i class="large material-icons" data-id='${id}' data-action='remove'>remove</i>
          </a>
          
        </td>        
      </tr>`;
	};
  
	productenTabel.innerHTML  = tijdelijkeString; 
}




