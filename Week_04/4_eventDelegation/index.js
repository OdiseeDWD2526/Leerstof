// de tbody van de tabel waarin onze producten geplaatst gaan worden
const productenTabel = document.getElementById('productenTabel');

// waar het aantal geselecteerde items in gaat verschijnen
const geselecteerd = document.getElementById('geselecteerd');

// waar de totaalprijs in zal geplaatst worden
const totaalPrijs = document.getElementById('totaalPrijs');

// wat we gaan gebruiken om de geselecteerde producten bij te houden
const winkelkar = {};

// de lijst met onze productgegevens. Later haal je dit soort gegevens op 
// uit een API
const gegevens = [{"PR_ID":112,"PR_CT_ID":1,"PR_naam":"Appel","PR_prijs":10},{"PR_ID":113,"PR_CT_ID":2,"PR_naam":"Granaatappel","PR_prijs":20},{"PR_ID":114,"PR_CT_ID":2,"PR_naam":"Boemkool","PR_prijs":15},{"PR_ID":133,"PR_CT_ID":1,"PR_naam":"Banaanaanwagen","PR_prijs":10},{"PR_ID":132,"PR_CT_ID":1,"PR_naam":"Framboos","PR_prijs":3},{"PR_ID":131,"PR_CT_ID":2,"PR_naam":"Andrijvie","PR_prijs":1.5},{"PR_ID":123,"PR_CT_ID":1,"PR_naam":"Bananasplit","PR_prijs":5},{"PR_ID":122,"PR_CT_ID":1,"PR_naam":"Hanananas","PR_prijs":5},{"PR_ID":121,"PR_CT_ID":1,"PR_naam":"Zuurpruim","PR_prijs":100},{"PR_ID":124,"PR_CT_ID":2,"PR_naam":"Ui","PR_prijs":2},{"PR_ID":130,"PR_CT_ID":1,"PR_naam":"Skiwi","PR_prijs":2},{"PR_ID":126,"PR_CT_ID":1,"PR_naam":"Spruitjes","PR_prijs":5},{"PR_ID":127,"PR_CT_ID":1,"PR_naam":"GestoofdePeren","PR_prijs":5},{"PR_ID":128,"PR_CT_ID":1,"PR_naam":"Gebakken peren","PR_prijs":10},{"PR_ID":135,"PR_CT_ID":2,"PR_naam":"Spinazie","PR_prijs":1.23},{"PR_ID":136,"PR_CT_ID":2,"PR_naam":"Spruiten","PR_prijs":3},{"PR_ID":137,"PR_CT_ID":2,"PR_naam":"Schorseneren","PR_prijs":5},{"PR_ID":145,"PR_CT_ID":1,"PR_naam":"Pampelmous","PR_prijs":2}];


// Vul de productenTabel met de gegevens die we hebben
toonGegevens();

productenTabel.addEventListener('click', (e) => {
});

function addProduct(id) {
}

function removeProduct(id) {
}

function updateWinkelkar() {
}

function toonGegevens() {
  
  // we werken hier met string concatenatie
  // merk op dat we slechts 1 DOM-update, nadat we door alle gegevens hebben gelopen
  let tijdelijkeString = '';
  
  gegevens.forEach((record) => {
     tijdelijkeString += `
      <tr>
        <td>${record.PR_naam}</td>
        <td>${record.PR_prijs}</td>
        <td id='data-aantal-${record.PR_ID}'></td>
        <td>
        
          <a class='btn text icon-left' data-id='${record.PR_ID}' data-action='add'>
            <i class="large material-icons" data-id='${record.PR_ID}' data-action='add'>add</i>
          </a>
          
          <a class='btn text icon-left' data-id='${record.PR_ID}' data-action='remove'>
            <i class="large material-icons" data-id='${record.PR_ID}' data-action='remove'>remove</i>
          </a>
          
        </td>        
      </tr>`;
  });
  
  productenTabel.innerHTML  = tijdelijkeString; 
}




