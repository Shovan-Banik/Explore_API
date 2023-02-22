function getDynamicUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayDynamicList(data))
}
function displayDynamicList(data){
    const ul=document.getElementById('li-container');
    for(let user of data){
        const li=document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
    }
}