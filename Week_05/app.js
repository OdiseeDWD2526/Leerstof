// hoe firebase gebruiken

// ga naar firebase.google.com
// inloggen / of een account maken
// na inloggen kan je naar de console gaan:
//	https://console.firebase.google.com/
// create a new project en geef het een naam
// indien nodig kies een parent resource
// zet de sliders om data te delen uit
// maak het project aan
// koppel firestore aan je project
	// ga naar de categorieen -> build -> voeg firestore database toe
// create database
	// standard edition is goed, locatie mag default zijn of in europa
	// configure -> test modus
// dan krijg je een overzicht van je database te zien
	// collectie = een tabel
	// een document is een rij
	// field = een kolom
	// voor dit vak: maak geen collectie in een document

// maak een web app
// het tandwieltje linksbovenaan -> project settings
// onder your-apps klik op het icoontje voor web (de html tags)
// hosting moet niet aanstaan
// geef de app een naam
// kopieer de firebaseconfig object

// meer informatie over de firebase library vind je hier: https://firebase.google.com/docs/web/setup?authuser=0&_gl=1*1yma9lh*_ga*MTQ3ODk4MDkxOC4xNzI1MjU3MjAy*_ga_CW55HF8NVT*czE3Njc3MjAxMjUkbzkkZzEkdDE3Njc3MjE4MDQkajMkbDAkaDA.#add-sdks-initialize
async function getAllDocuments(db, collection){
	// doe de get-opvraag
	const coll= db.collection(collection); // zoek naar de juiste collectie
	const result = await coll.get(); // vraag alle objecten op

	result.forEach(doc => {
		const data = doc.data();
		console.log(`${data.Label} => ${data.Tekst}`);
	});
	console.log('----------------');
}

async function getDocumentById(db, collection, id){
	// doe de get-opvraag
	const doc= db.collection(collection).doc(id); // zoek naar het juiste document
	const result = await doc.get(); // vraag 1 object op

	const data = result.data();
	//console.log(`${data.Label} => ${data.Tekst}`);
	console.log('----------------');
	return data;
}

async function searchDocumentByFieldValue(db, collection, field, value){
	const doc= db.collection(collection).where(field, '==', value); // zoek naar het juiste document
	const result = await doc.get(); // vraag alle objecten op die aan bovenstaande voorwaarde voldoet

	result.forEach(doc => {
		const data = doc.data();
		console.log(`${data.Label} => ${data.Tekst}`);
	});
	console.log('----------------');
}

async function addNewDocument(db, collection, id, data){
	const coll = db.collection(collection);
	if(id){
		// set gaat eigenlijk een object gaan overschrijven, als het id nog niet bestaat dan wordt een nieuw object aangemaakt
		const result = await coll.doc(id).set(data); // data moet een json zijn
		console.log('succesfully added'); // ik ga ervan uit dat het gaat werken
		console.log(result);
		console.log('----------------');
	} else {
		const result = await coll.add(data);
		console.log('succesfully added'); // ik ga ervan uit dat het gaat werken
		console.log(result);
		console.log('----------------');
	}
}

async function documentExists(db, collection, id){
	if(await getDocumentById(db, collection, id)){
		return true;
	} else {
		return false;
	}
}

async function updateDocument(db, collection, id, newdata){
	const coll = db.collection(collection);
	
	// eventueel hier een extra check plaatsen om te kijken of het element bestaat
	if(!await documentExists(db, collection, id)){
		console.log('doc does not exist');
		return;
	}

	await coll.doc(id).set(newdata); // newdata moet een json zijn
	console.log('succesfully updated'); // ik ga ervan uit dat het gaat werken
	console.log('----------------');
}

async function deleteDocuments(db, collection, tekstValuesToKeep){
	const coll = db.collection(collection);
	// zoek alle documenten die niet een field met Tekst hebben met een waarde in de array tekstValuesToKeep
	const docs= coll.where('Tekst', 'not-in', tekstValuesToKeep);
	const result = await docs.get(); // vraag alle objecten op die aan bovenstaande voorwaarde voldoet

	const deletePromises = [];
	console.log(`found ${result.length} documents to delete`);
	result.forEach(doc => {
		// stuur het delete commando naar de server
		const promise = coll.doc(doc.id).delete();
		//voeg de promise toe aan de array
		deletePromises.push(promise);
	});

	await Promise.all(deletePromises); // wacht tot alle documenten verwijderd zijn
	console.log('alles verwijderd');
	console.log('----------------');
}

(function(){
	console.log('hello world');

	// Firebase configuratiegegevens (vervang met je eigen configuratie)
	const firebaseConfig = {
		apiKey: 'AIzaSyDQBZtyHe44qQN9icFhZaMNZu_FWLM9IGI',
		authDomain: 'dynamic-web-development-8ff45.firebaseapp.com',
		projectId: 'dynamic-web-development-8ff45',
		storageBucket: 'dynamic-web-development-8ff45.appspot.com',
		messagingSenderId: '463227987186',
		appId: '1:463227987186:web:9fbe2280cad425d9c71c6b'
	};

	// initialize de firebase library
	firebase.initializeApp(firebaseConfig); // het is normaal dat hij hier firebase niet kent, maar dit komt uit het eerste scriptje in de html
	const db = firebase.firestore();

	// get all
	getAllDocuments(db, 'Demo les'); //'Demo les' is de naam van de collectie
	// waarom in een functie -> veel van de firebase operaties werken met promises

	// get one
	getDocumentById(db, 'Demo les', 'OKffajx87g2zwHOXxVa4');

	// search
	searchDocumentByFieldValue(db, 'Demo les', 'Label', 'aaaaa');

	// add elementen (ook voor bijvoorbeeld je array uit week 2 in je firestore database te krijgen)	
	addNewDocument(db, 'Demo les', 'Bart', {voornaam: 'Bart overschreven', achternaam: 'Brondeel'});
	addNewDocument(db, 'Demo les', undefined, {voornaam: 'Jonas', achternaam: 'Kobe'});
	// als het id undefined is, dan wordt er een automatisch id gekozen

	//update/wijzig een document
	updateDocument(db, 'Demo les', 'Bart', {voornaam: 'Bart origineel', achternaam: 'Brondeel'});

	//delete Document
	deleteDocuments(db, 'Demo les', ['Test tekst', 'bbbb']);
})();