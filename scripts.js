
function testGet(){

    var url = "https://script.google.com/macros/s/AKfycbwN6WTdK3tHNh_mj5mrLKgJ23xvE-zP1W1r7ReeVsKofGPkmmjmLG_xrc5D-1Gurn-J/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent =  d[0].status; 
        });
}

function testPost() {
    var url = "https://script.google.com/macros/s/AKfycbzTnJ9pSuhtNPLQ0uCsjnCRy9o-3Sszfr_jd11b0fSO23euiup-MHbx6ckycS2pvabM/exec";
    
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
    
