/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let myArr = [1, true, Infinity, 'string', NaN, {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/


function showArr (arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

showArr(myArr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function showOtherArr (arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let newArr = [1,'2', true, undefined, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

showOtherArr(newArr, 0);
showOtherArr(newArr, 1);
showOtherArr(newArr, 2);
showOtherArr(newArr, 3);
showOtherArr(newArr, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function bookList (bookName) {

    let books = {
        'Naruto': {
            'quantidadePaginas':100,
            'autor': 'Kishimoto',
            'editora': 'Jump'
        },

        'Bleach': {
            'quantidadePaginas':100,
            'autor': 'Kubo',
            'editora': 'Jump'
        },
        'One piece': {
            'quantidadePaginas':100,
            'autor': 'Odda',
            'editora': 'Jump'
        }
    };

    return bookName ? books[bookName] : books ;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

bookList();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

"O livro " + Object.keys(bookList())[0] + " tem " + bookList('Naruto').quantidadePaginas +" páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

"O autor do livro " + Object.keys(bookList())[1] + " é " + bookList('Bleach').autor + "."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

"O livro " + Object.keys(bookList())[2] + " foi publicado pela editora " + bookList('One piece').editora + "."
