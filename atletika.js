const font = 0.45359237;
//képlet: (súlyKg/font/20)*kalória*perc

function energiaKalkulalas(){
    let tevekenyseg = document.getElementById("tevekenyseg").value;
    let sulyKg = parseFloat(document.getElementById("kg").value);
    let perc = parseInt(document.getElementById("perc").value);
    //console.log(tevekenyseg);
    document.getElementById("eredmeny").innerHTML = (sulyKg/font/20)*tevekenysegKcal(tevekenyseg)*perc;

}

function tevekenysegKcal(tev){
    if(tev == "seta") return 1.1;
    else if(tev == "kocogas") return 1.5; 
    else if(tev == "futas") return 1.8
    return 1;
}