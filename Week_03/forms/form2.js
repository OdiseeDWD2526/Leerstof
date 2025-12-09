const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);

console.log('username', params.get('username'));
console.log('password', params.get('password'));