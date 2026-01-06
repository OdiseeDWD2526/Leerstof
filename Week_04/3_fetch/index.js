// Voorbeeld fetch

// get demo with https://pokeapi.co/api/v2/pokemon  (https://pokeapi.co/docs/v2)

async function getPokemons(){
	let response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
	let json = await response.json();
	console.log(json);
}

getPokemons();

// getAll demo with https://api.restful-api.dev/objects  ( https://restful-api.dev )
fetch('https://api.restful-api.dev/objects').then((response) =>{
	return response.json();
}).then((json)=>{
	console.log(json);
});


fetch('https://api.restful-api.dev/objects?id=2&id=4').then((response) =>{
	return response.json();
}).then((json)=>{
	console.log(json);
});

// get one item with 'https://api.restful-api.dev/objects/' + id

// add item with 'https://api.restful-api.dev/objects' , method=post, body is a json-str, header: content-type: application/json
const data = { name: 'Jens', data: 34 };

async function postAndGet(data){
	let response = await fetch('https://api.restful-api.dev/objects', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});

	if(!response.ok){
		return;
	}
	
	let json = await response.json();
	console.log(json);

	response = await fetch('https://api.restful-api.dev/objects/' + json.id);

	json = await response.json();
	console.log(json);
    
	response = await fetch('https://api.restful-api.dev/objects/' + json.id, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});
    
	json = await response.json();
	console.log(json);
}

postAndGet(data);
/*
fetch('https://api.restful-api.dev/objects', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(data)
}).then(response => response.json())
  .then(result => console.log(result));
  */