const btn = document.getElementById('knop');
const p = document.getElementById('een-id');
const div = document.getElementById('buttons');

const in_todo = document.getElementById('todo');
const btn_todo = document.getElementById('addToList');
const div_todo = document.getElementById('todos');

let counter = 0;

btn.addEventListener('click', (event) =>{
	counter++;
	p.innerText = 'test ' + counter;
	p.classList.toggle('benadrukt'); // andere opties zijn add/remove

	console.log(div.innerHTML);
	div.innerHTML += `<div><button id="een-id">btn ${counter}</button></div>`;
    
	let ele_div = document.createElement('div');
	let ele_btn = document.createElement('button');
    
	ele_btn.classList.add('benadrukt');
	ele_btn.innerText = 'btn' + counter;

	ele_div.appendChild(ele_btn);
	div.appendChild(ele_div);

    div.prepend(ele_div);
});

btn_todo.addEventListener('click', (event) => {
    //console.log(in_todo);
    let text = in_todo.value;
    
    //console.log(text);

    let ele_div = document.createElement('div');
    ele_div.innerText = text;
    ele_div.setAttribute('data-pid', div_todo.childElementCount);
    /*ele_div.addEventListener('click', ()=>{
        ele_div.classList.toggle('benadrukt');
    }) */ // hang event listener aan de parent div, dat is efficienter en heb je maar 1 listener nodig
    //div_todo.innerHTML += `<div>${text}</div>`; // hierop kan je geen eventlistener toevoegen
    div_todo.append(ele_div);
});

div_todo.addEventListener('click', (event) => {
    event.target.classList.toggle('benadrukt');
    console.log(event.target.getAttribute('data-pid'));
    console.log(event.target);
})


div_todo.addEventListener('dblclick', (event) => {
    div_todo.removeChild(event.target);
})