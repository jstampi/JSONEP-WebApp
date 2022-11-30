
function testGet(){

    var url = "https://script.google.com/macros/s/AKfycby2KHvf9qoiJZcPode_Jza2zReMQOcjKHCLrUQMVazlAkE2jKW1hcS81UYFksCMux82/exec"
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent =  d[0].status; 
        });
}

function testPost(e){
    var url = "https://script.google.com/macros/s/AKfycby2KHvf9qoiJZcPode_Jza2zReMQOcjKHCLrUQMVazlAkE2jKW1hcS81UYFksCMux82/exec";

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({first: "Japeth", phone: "582-245-2525", last:"Sunbro"}) // body data type must match "Content-Type" header
      });
}      
          //{first:"Macron", phone:"88-555-1212", last:"Putin"}
          //then(d => {document.getElementById("app").textContent = d[0].status;

document.getElementById("btn").addEventListener("click", testGet);  
document.getElementById("btn1").addEventListener("click", testPost);  
    
