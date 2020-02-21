
//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.

function returnBiggerString(string1,string2){
  if(string1.length>string2.length){
    return string1
  }else{
    return string2
  }
}

var bigger =returnBiggerString('the bigger string it is','not bigger');
console.log(bigger);
