let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
let numero3 = Number(prompt("Ingresa el tercer número:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {

    console.log("Debes ingresar solamente números.");

} else {

    let mayor;
    let centro;
    let menor;

    if (numero1 === numero2 && numero2 === numero3) {

        console.log("Los tres números son iguales.");
        console.log(numero1 + ", " + numero2 + ", " + numero3);

    } else if (numero1 >= numero2 && numero1 >= numero3) {

        mayor = numero1;

        if (numero2 >= numero3) {
            centro = numero2;
            menor = numero3;
        } else {
            centro = numero3;
            menor = numero2;
        }

    } else if (numero2 >= numero1 && numero2 >= numero3) {

        mayor = numero2;

        if (numero1 >= numero3) {
            centro = numero1;
            menor = numero3;
        } else {
            centro = numero3;
            menor = numero1;
        }

    } else {

        mayor = numero3;

        if (numero1 >= numero2) {
            centro = numero1;
            menor = numero2;
        } else {
            centro = numero2;
            menor = numero1;
        }
    }

    console.log("De mayor a menor:");
    console.log(mayor + ", " + centro + ", " + menor);

    console.log("De menor a mayor:");
    console.log(menor + ", " + centro + ", " + mayor);
}