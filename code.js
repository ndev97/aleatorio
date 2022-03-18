const nombres = document.getElementById("ingresar");
const generar = document.getElementById("generar");

let nombresArray = new Array(10);

nombres.addEventListener("click", ()=>{
    for(i = 0; i < 10; i++){
        nombresArray[i] = prompt("Ingrese nombre n° " + (i+1));
    }
    document.getElementById("nombre1").value = nombresArray[0];
    document.getElementById("nombre2").value = nombresArray[1];
    document.getElementById("nombre3").value = nombresArray[2];
    document.getElementById("nombre4").value = nombresArray[3];
    document.getElementById("nombre5").value = nombresArray[4];
    document.getElementById("nombre6").value = nombresArray[5];
    document.getElementById("nombre7").value = nombresArray[6];
    document.getElementById("nombre8").value = nombresArray[7];
    document.getElementById("nombre9").value = nombresArray[8];
    document.getElementById("nombre10").value = nombresArray[9];
});

generar.addEventListener("click", () =>{

    let i = nombresArray.length;
    let numRandom;
    let temp;

    if(document.getElementById("nombre1", "nombr2", "nombre3", "nombre4", "nombre5", "nombre6", "nombre7", "nombre8", "nombre9", "nombre10").value == ""){
        return alert("Faltan nombres!!");
    }

    while(--i > 0){
        numRandom = Math.floor(Math.random() * (i+1));
        temp = nombresArray[numRandom];
        nombresArray[numRandom] = nombresArray[i];
        nombresArray[i] = temp;
    };

    document.getElementById("nombre1").value = nombresArray[0];
    document.getElementById("nombre2").value = nombresArray[1];
    document.getElementById("nombre3").value = nombresArray[2];
    document.getElementById("nombre4").value = nombresArray[3];
    document.getElementById("nombre5").value = nombresArray[4];
    document.getElementById("nombre6").value = nombresArray[5];
    document.getElementById("nombre7").value = nombresArray[6];
    document.getElementById("nombre8").value = nombresArray[7];
    document.getElementById("nombre9").value = nombresArray[8];
    document.getElementById("nombre10").value = nombresArray[9];
});
