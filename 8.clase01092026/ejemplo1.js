
function sumar(){
    alert("L funcion sumar funciona ");

    let num1=preseInt(document.getElementByname("num1")[0].value);
    let num2=preseInt(document.getElementByname("num2")[0].value);
    let resultado =num1 + num2;
    let mostrar=document.getElementById("resultado");
    mostrar.innerHTML="suma" + resultado;
    let mostrar2=document.getElementById("resultado2");
    let matriz = "";
    for (let i =0; i < num1; i++){
        for (let j = 0; j < num2; j++){
            matriz += "* ";
        }
        matriz += "<abr>";
    }
    mostrar2.innerHTML = matriz;

}