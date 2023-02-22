function getComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComments(data))
}
function displayComments(comments){
    const container=document.getElementById('div-container');
    for(let comment of comments){
        const div=document.createElement('div');
        div.classList.add('design');
        div.innerHTML=`
        <h1>postId: ${comment.postId}</h1>
        <h2>Id: ${comment.id}</h2>
        <h3>Name: ${comment.name}</h3>
        <h4>Email: ${comment.email}</h4>
        <h5>body: ${comment.body}</h5>
        `
        container.appendChild(div);
    }
}
getComments();