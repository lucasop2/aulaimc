console.log("teste");

function calculaimc() {

let peso, altura, resp , clasificaçao;

peso = parseFloat(document.getElementById("edtpeso").value) ;
altura = parseFloat(document.getElementById("edtaltura").value) ;

resp = peso / (altura * altura);

if (resp <= 18.5){
clasificaçao= "abaixo do peso";
}
else if ( resp <= 24,9){

clasificaçao= "peso ideal";
}
 else if (resp<= 29.9){
clasificaçao= "levemente acima do peso ";
 }
 else {

clasificaçao="progamador termine a tabela";
 }

 document.getElementById("resp").innerText ="o seu imc e: " + resp + "a sua classificaçao e : "+ clasificaçao;
}