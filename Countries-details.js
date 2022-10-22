var getdata = new XMLHttpRequest();
getdata.open('GET', 'https://restcountries.com/v3.1/all', true)
getdata.send();
getdata.onload = function(){
    var data = JSON.parse(getdata.response)
    console.log(data)
    console.log(data.name)
    for(var i = 0;i<=data.length-1;i++){
        console.log(i + 1, data[i].name.common);
         console.log(data[i].flags.png);
         console.log(data[i].population);
    console.log(data[i].region);
    console.log(data[i].subregion);
    console.log(" ");
}
}  
