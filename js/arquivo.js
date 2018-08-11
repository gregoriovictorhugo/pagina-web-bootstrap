function enviar(){ //tudo dentro desta função so ira funcionar quando  oenviar for usado//
  var nome = document.getElementById("txt-nome"); //Atribui a variavel no9me o centudo do item com id=nome

  if(nome.value !=""){
    //Mostrar mensagem com nome
    alert("Obrigado " + nome.value + ", mas esta área está em desenvolvimento");
  }
  else {
    //Mostrar mensagem genérica
    alert("Obrigado, mas esta área está em desenvolvimento")
  }
}
