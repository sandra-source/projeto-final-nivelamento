// VARIÁVEIS E CONSTANTES:

// Variáveis são espaços na memória dos quais vc vai precisar usar para
// reutilizar em algum momento no seu código.
// exemplo: 
// suponhamos que você precise descobrir a idade de 3 pessoas e depois saber
// qual a média de idade dessas 3 pessoas. Você vai, então, armazenar a idade
// de cada um dos 3 para depois somar as 3 e então dividir tudo por 3.

// exemplo:
// var idade1, idade2, idade3;
// var mediaDasIdades;

// idade1 = 15;
// idade2 = 20;
// idade3 = 40;

// mediaDasIdades = (idade1 + idade2 + idade3) / 3;

// Já as constantes, seguem a mesma linha de raciocínio das variáveis, 
// porém, o valor delas não pode ser alterado. 
// exemplo:

// const quantosDedosVoceTem;
// var tamanhoDasSuasUnhas;

// neste exemplo, a quantidade de dedos que vc tem é uma constante, enquanto 
// o tamanho das suas unhas é uma variável, ou seja, vc sempre vai ter 
// uma certa quantidade de dedos, porém o tamanho das suas unhas pode mudar.

// - - - - agora vou fazer mais rápido senão não vai dar tempo de acabar - - - 

// O QUE SÃO COMANDOS DE DECISÃO:
// comandos de decisão são basicamente tudo o que deve acontecer se uma condição for 
// verdade. 
// exemplo:

// while(1 == 1){
//     alert('Hello World');
// }
// nesse exemplo, tudo oq está dentro dos parenteses depois do while, é a condição que,
// caso seja verdadeira, vai executar tudo o que está dentro dos colchetes {}.
// nesse caso, o número 1 é de fato igual a ele mesmo, 1, então vai ficar aparencendo
// pra sempre na tela um popup escrito HELLO WORLD, pois ele foi chamado pelo comando alert()
// para ser executado enquanto 1 for igual a 1, para parar esse ciclo, vou ensinar outra função melhor que o 'while'

// além do while, os comandos de decisão mais usados são o IF, ELSE E O FOR

// o if é igual ao while, mas ele só é executado uma vez, se chamado, a diferença dele
// pro 'while' é que o 'while' executa enquanto aquilo for verdadeiro, nesse caso 1 igual a 1
// já o if, só executa uma vez e SE for verdadeira. se não for, deve cair no else, que significa 'outro' ou 'senão'

// if(1==1){
//     alert('Hello World');

// } else{
//     alert('Que pena! 1 não é igual a 1. Ou, em outras palavras, 1!=1 . até mais!!')
// }

// nesse exemplo, SE 1 for igual a 1 entao vai executar o HELLO WORLD, se não for, vai cair no else e executar a segunda mensagem.

// funções: 

// exemplos:

// function primeiroNumeroSegundoNumero(x, y){


// }
 
// primeiroNumeroSegundoNumero(1, 2)

// as funções são bacanas pq vc pode brincar bastante com elas , ali no primeiroNumeroSegundoNumero tem os parametros, na parte debaixo,
// q são o 1 e o 2, e o (x, y) automaticamente  já sabem quem é quem. isso é bacana, dá pra fazer muita coisa com isso. eu posso explicar em outro arquivo depois, ou em outro repositório. 

// ESCOPOS:

// escopos são basicamente a separação de onde cada trecho de código começa e termina. 
// por exemplo, ali na função o escopo dela é tudo o que acontece desde a criação dela, o código implementado dentro dos {} 
// e até a chegada dos parâmetros ali embaixo (1,2) e o nome dela. No exemplo do if, do else, e de todos, a mesma coisa. 
// Existe o escopo global e o local , o global é por exemplo uma variável (ou constante) que vc cria no começo e sabe que vai usar ela sempre. 
// já o local é o exemplo da função, o escopo dela só pode ser usado ali. 

// INPUTS E OUTPUTS:

// inputs são os dados que o usuário pode colocar,
// outputs são os dados que podem ser retornados ao usuário. 

// INPUT EXEMPLO:

// var numeroDoUsuario = prompt("Digite um número: ")

// OUTPUT EXEMPLO: 
// document.write(`o número que vc digitou é: ${var}`)

// nesse caso oq o usuario digitar dentro da caixa do prompt vai ser atribuido no espaço de memória numeroDoUsuario 
// e depois vai ter como output o " document.write() " , ou seja, vai aparecer a mensagem dali e o número que o usuário digitou.

// ARRAY:

// array é basicamente uma matriz que vc pode usar pra atribuir muitos dados a uma variável ou algo do tipo.
// é bom pq vc pode colocar um monte de coisa e chamar depois. vou dar um exemplo:

// cachorro = {late: 'auau', é: 'companheiro'}
// gato = {mia: 'miau', é: ['dengoso', 'frio', 'calculista']}

// nesse exemplo de array eu dei duas qualidades pro cachorro e algumas pro gato também, conforme na realidade fora do código.
// ali na parte do "é: " do gato, oq está em colchetes é um objeto, que pode ser tanto adicionado dentro de um array como nesse exemplo,
// quanto em uma variável solta.

// TIPOS DE ESCRITA:

// as escritas são importantes pq cada linguagem de programação tem a sua

// exemplos:

// camelCase -> nesse exemplo, a primeira palavra começa com a primeira letra minúscula, e a primeira letra das palavras subseguintes ficam em maiúsculo.
// esteÉUmExemploDeCamelCase

// já em PascalCase, todas começam maiúsculas:
// EsteÉUmExemploDePascalCase

// em  kibab-case, todas elas tem por separação um -ífen-
// este-é-um-exemplo-de-kibab-case , mto usado pra titúlos mas pra algumas linguagens também é essencial.

// e por fim o snake_case, q é mais chatinho pq tem q apertar dois botoes pra fazer a separação _ 
// este_é_um_exemplo_de_snake_case 
// é snake o nome pq o underline parece uma cobrinha _____________________________________________.. mordeu kk

// CAMINHO ABSOLUTO E RELATIVO:

// absoluto é quando vc tá na sua máquina e vendo arquivos e fica aparecendo lá em cima todo o caminho percorrido até chegar na pasta 

// caminho relativo é quando vc encurta isso e já vai botando logo a pasta que vc vai usar, pra ficar menor
// pra isso vc sempre tem que usar ./././ dependendo das pastas, cada ./ é uma pasta por exemplo, e as vezes pra pular pra pasta de trás vc pode usar um ../

// OPERADORES:
// && esse é usado pra quando uma condição E OUTRA forem verdadeiras . exemplo if(1==1 && 2==2){execute um código aqui} 
// só vai executar se 1 for igual a 1 e 2 for igual a 2

// || é igual ao && , só q ele pode executar se uma OU OUTRA forem verdadeiras. exemplo if(1==1 || 2==2){execute um código aqui} 
// vai executar se 1 for igual a 1 OU  se 2 for igual a 2

// EPER:
// EPER é um jeito de programar pra ficar mais fácil e mais organizado pra vc fazer e entender, 
// a meta é vc programar com ele na cabeça sem precisar ficar escrevendo ele 

// ENTENDER - PLANEJAR - EXECUTAR - REVISAR 

// PILHA  E FILA:
// pilha são os dados tipo que um embaixo do outro, o último dado é o primeiro a ser removido 
// fila é como se fosse os dados um do lado do outro em uma fila mesmo, e o primeiro dado é o primeiro a ser removido

// DIFERENÇAS ENTRE HTML, JAVASCRIPT E CSS:

// html - linguagem de MARCAÇÃO, e onde vc pode juntar os 3
// javascript - linguagem de PROGRAMAÇÃO, onde a magia acontece 
// CSS - linguagem de EMBELEZAÇÃO kk pra tudo ficar mais bonitinho e apresentável 