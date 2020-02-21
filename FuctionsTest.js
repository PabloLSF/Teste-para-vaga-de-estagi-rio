
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

//E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.


function returnFunctionDoubleString(func,string1,string2){
  var funct = func(string1,string2);
  return funct;

}

var testFunc =returnFunctionDoubleString(returnBiggerString,'the bigger string it is','not bigger');
console.log(testFunc);


//E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos



function concatFunction( arg1,...args) {
  var str=arg1;
  for(var i=0;i<args.length;i++){
    str= str +' '+ args[i];
  }
  return str;
}

var arr = concatFunction('helo','world','testing','this','function');
console.log(arr);




//E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.


//E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.


//E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.

// arry para o proximo exercicio
var arry = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];
//E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.

for(var i=0;i<arry.length;i++){
console.log("olá "+arry[i].nome+' '+arry[i].sobrenome+'!');
}

//E.8 Imprima a soma das idades (dica: utilize reduce)

var sum=0;
for(var i=0;i<arry.length;i++){
sum=sum+arry[i].idade
}
console.log(sum);

//E.9 Imprima o objeto se existir alguem com menos 25 anos.

//E.10 Imprima todos os elementos em que a idade é menor que 30 anos.

//E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.
