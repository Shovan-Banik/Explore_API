function allPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}
function displayPosts(posts){
    const container=document.getElementById('div-container');
    for(let post of posts){
        const div=document.createElement('div');
        div.classList.add('design');
        div.innerHTML=`
        <h1>Id: ${post.id}</h1>
        <h2>Title: ${post.title}</h3>
        <p>Description:${post.body}</p>
        `
        container.appendChild(div);
    }
}
allPosts();