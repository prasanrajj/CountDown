const endDate = "04 january 2024 03:18 PM";
document.getElementById("end-date").innerText = endDate;


const inputs = document.querySelectorAll("input")


function clock(){
    const now = new Date();
    const end = new Date(endDate);
    const diff = (end - now) / 1000;
    console.log(diff);
    if(diff < 0){
        inputs[0].value = "Y";
    inputs[1].value = "E";
    inputs[2].value = "S";
    inputs[3].value = "!";
    // console.log("Great..! now we are available at vizag..!");
        return 0;
    }
    else{
        // console.log("coming soon...!")
        inputs[0].value = Math.floor(diff/3600/24);
        inputs[1].value = Math.floor(diff/3600) % 24;
        inputs[2].value = Math.floor(diff/60) % 60;
        inputs[3].value = Math.floor(diff) % 60;
    }
    
}

clock();

setInterval(
    () => {
        clock()
    },
    1000
)