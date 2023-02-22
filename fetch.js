// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const url='https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// // .then(response=>console.log(response));
// .then(response=>response.json())
// .then(json=>console.log(json))

function getJson(){
    const url='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response=>response.json())
    .then(json=>console.log(json));
}