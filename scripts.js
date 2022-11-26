
function testGet(){

    var url = "https://script.google.com/macros/s/AKfycbwN6WTdK3tHNh_mj5mrLKgJ23xvE-zP1W1r7ReeVsKofGPkmmjmLG_xrc5D-1Gurn-J/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent =  d[0].status; 
        });
}

document.getElementById("btn").addEventListener("click", testGet);   