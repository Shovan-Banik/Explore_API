function getUsersData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(data){
    // console.log(data[0].address.city);
    const first=parseFloat(data[0].address.geo.lat);
    const second=parseFloat(data[0].address.geo.lng);
    const total=first+second;
    console.log(total.toFixed(2));
}