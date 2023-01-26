function colorChange(){
    let color = document.getElementById("text").value;
    document.getElementById("color").style.color= color;
}

function reset() {
    document.getElementById("color").style.color="black";
}