function getToDO(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>displayToDos(data))
}
function displayToDos(todos){
    const container=document.getElementById('div-container');
    for(let todo of todos){
        const div=document.createElement('div');
        div.classList.add('design');
        div.innerHTML=`
        <h1>postId: ${todo.userId}</h1>
        <h2>Id: ${todo.id}</h2>
        <h3>Name: ${todo.title}</h3>
        <h4>Email: ${todo.completed}</h4>
        `
        container.appendChild(div);
    }
}
getToDO();