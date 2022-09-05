let valor1 = 1, valor2 = 1, pos = 1 // 0,1,1,2,3,5,8,13,...
num = prompt("Ingrese un numero");
num = parseInt(num);
while(num > valor1 && num > valor2){
    if(valor1 < valor2){
        valor1 += valor2;
    }else{
        valor2 += valor1;
    }
    pos++;
}
if(num == valor1 || num == valor2){
    alert("El numero" +num+"Pertenece a la sucesion en la posicion" +(pos + 1));
}else{
    alert("El numero "+num+" no pertenece a la sucesion de fibonacci")
}