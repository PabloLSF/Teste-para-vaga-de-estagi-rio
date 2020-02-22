// arry para o proximo exercicio

var arry = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.

function returnBiggerString(string1,string2){
  if(string1.length>string2.length){
    return string1
  }else{
    return string2
  }
}

//E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.

function returnFunctionDoubleString(func,string1,string2){
  var funct = func(string1,string2);
  return funct;

}

//E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos

function concatFunction( arg1,...args) {
  var str=arg1;
  for(var i=0;i<args.length;i++){
    str= str +' '+ args[i];
  }
  return str;
}


//E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.

function returnNumString(){
 str='teste 1 de 2 string 3';
  var  aux='';

  for(var i=0;i< str.length;i++){
    var c=str.charAt(i);
  switch(c) {
  case '0':
    aux=aux+'zero';

    break;
  case '1':
     aux=aux+'um';
    break;
       case '2':
     aux=aux+'dois';
    break;
  case '3':
     aux=aux+'três';
    break;
       case '4':
     aux=aux+'quatro';
    break;
  case '5':
     aux=aux+'cinco';
    break;
       case '6':
     aux=aux+'seis';
    break;
  case '7':
     aux=aux+'sete';
    break;
       case '8':
     aux=aux+'oito';
    break;
  case '9':
     aux=aux+'nove';
    break;
  default:
    aux=aux+str.charAt(i);



}
  }
    return aux;

}


//E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.

function codeString(){
 str='T35t3 d3 35t4g1o';
  var  aux='';

  for(var i=0;i< str.length;i++){
    var c=str.charAt(i);
  switch(c) {
  case '1':
    aux=aux+'i';

    break;
  case '3':
     aux=aux+'e';
    break;
       case '4':
     aux=aux+'a';

    break;
  case '5':
     aux=aux+'s';
     break;
  default:
    aux=aux+str.charAt(i);



}
  }
    return aux;

}



//E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.

//gerado em https://viacep.com.br/ws/96085-470/json/


var ender={
  "cep": "96085-470",
  "logradouro": "Avenida Domingos José de Almeida",
  "complemento": "",
  "bairro": "Areal",
  "localidade": "Pelotas",
  "uf": "RS",
  "unidade": "",
  "ibge": "4314407",
  "gia": "583"
};
function findCep(obj){
var ender={"endereco":"",
            "numero":"",
          "cidade":"",
          "estado":""};
  ender.endereco=obj.logradouro;
  ender.numero=obj.gia;
  ender.cidade=obj.localidade;
  ender.estado=obj.uf;


    return ender;

}


//E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.

function printName(arry){
for(var i=0;i<arry.length;i++){
  console.log("olá "+arry[i].nome+' '+arry[i].sobrenome+'!');
}
}

//E.8 Imprima a soma das idades (dica: utilize reduce)

function sumAge(arry){
var sum=0;
for(var i=0;i<arry.length;i++){
  sum=sum+arry[i].idade
}
  return sum;
}

//E.9 Imprima o objeto se existir alguem com menos 25 anos.
function ifLowAge(arry){
var ageLow=false;
for(var i=0;i<arry.length;i++){
  if(arry[i].idade<25){
    ageLow=true;
  }
}
if(ageLow){
  console.log(arry)
}
}

//E.10 Imprima todos os elementos em que a idade é menor que 30 anos.
function findLowAge(arry){
for(var i=0;i<arry.length;i++){
  if(arry[i].idade<30){
    console.log('id: '+arry[i].id+'\n'+'Nome: '+arry[i].nome+' '+arry[i].sobrenome+'\n'+'Idade: '+arry[i].idade);
  }
}
}

//E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.
function decOrdern(arry){
var swapp;
    var n = arry.length;

    do {
        swapp = false;
        for (var i=0; i < n-1; i++)
        {
            if (arry[i].idade < arry[i+1].idade)
            {
               var temp = arry[i];
               arry[i] = arry[i+1];
               arry[i+1] = temp;
               swapp = true;
            }else if(arry[i].idade == arry[i+1].idade){
              if(arry[i].id < arry[i+1].id){
                var temp = arry[i];
               arry[i] = arry[i+1];
               arry[i+1] = temp;
               swapp = true;
              }
            }
        }
        n--;
    } while (swapp);
  return arry;
}

// Chamada das functions
console.log('E.1');
var bigger =returnBiggerString('the bigger string it is','not bigger');
console.log(bigger);

console.log('E.2');
var testFunc =returnFunctionDoubleString(returnBiggerString,'the bigger string it is','not bigger');
console.log(testFunc);

console.log('E.3');
var arr = concatFunction('helo','world','testing','this','function');
console.log(arr);

 console.log('E.4');
 console.log(returnNumString());

console.log('E.5');
console.log(codeString());

 console.log('E.6');
console.log(findCep(ender));

 console.log('E.7');
 printName(arry);

console.log('E.8');
 var sum= sumAge(arry);
 console.log(sum);

 console.log('E.9');
ifLowAge(arry);

console.log('E.10');
findLowAge(arry);

console.log('E.11');
var dec=decOrdern(arry);
console.log(dec);
