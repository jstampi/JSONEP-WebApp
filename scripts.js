
function testGet(){

    var url = "https://script.google.com/macros/s/AKfycbxertJ-M3g9l8QkhQG5JDRCz_QO_udmqvkpLCZu9X5p9wuVdrAua_K32Q9DpBDuhRnJ/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent =  d[0].status; 
        });
}

function testPost() {
    var url = "https://script.google.com/macros/s/AKfycbxertJ-M3g9l8QkhQG5JDRCz_QO_udmqvkpLCZu9X5p9wuVdrAua_K32Q9DpBDuhRnJ/exec";
    
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body:JSON.stringify({first:"Macron", phone:"88-555-1212", last:"Putin"})
        .then(d => {document.getElementById("app").textContent = d[0].status;
        });
}
document.getElementById("btn").addEventListener("click", testGet);  
document.getElementById("btn1").addEventListener("click", testPost);  
    
