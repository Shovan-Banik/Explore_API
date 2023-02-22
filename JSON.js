const shop={
    owner: 'shovan',
    adrees: {
        village: 'balla',
        thana: 'kaliahati',
        district: 'tangail'
    },
    product: ['saban','tel','chono','paoder','bby food'],
    profit: 50000
}
console.log(shop);
const shopJson=JSON.stringify(shop);
console.log(shopJson);
const objShop=JSON.parse(shopJson);
console.log(objShop);