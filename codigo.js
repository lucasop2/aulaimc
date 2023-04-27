console.log("teste");

function calculaimc() {

let peso, altura, resp , clasificacao;

peso = parseFloat(document.getElementById("edtpeso").value) ;
altura = parseFloat(document.getElementById("edtaltura").value) ;

resp = peso / (altura * altura);

if (resp <= 18){
clasificaçao= "abaixo do peso";
}
else if (resp <= 25){

clasificaçao= "peso ideal";
}
 else if (resp <= 30){
clasificaçao= "levemente acima do peso ";
 }
 else {

clasificacao="progamador termine a tabela";
 }

 document.getElementById("resp").innerText ="o seu imc e: " + resp + " a sua classificaçao e : "+ clasificaçao;
}