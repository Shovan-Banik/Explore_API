function getPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayPhotos(data))
}
function displayPhotos(photos){
    const container=document.getElementById('div-container');
    for(let photo of photos){
        const div=document.createElement('div');
        div.classList.add('design');
        div.innerHTML=`
        <h1>albumId: ${photo.albumId}</h1>
        <h2>id: ${photo.id}</h2>
        <h3>title: ${photo.title}</h3>
        <img src='${photo.thumbnailUrl}'><br>
        <img src='${photo.url}'>
        `
        container.appendChild(div);
    }
}
getPhotos();