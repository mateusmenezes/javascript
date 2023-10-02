/*
    O objeto literal é um objeto descrito no código
    OBSERVAR: O objeto literal ou estático é também divido em par(atributo e valor), separados por dois pontos
    OBSERVAR que todo objeto literal é unico dentro da aplicacao, se criar um objeto literal e uma variavel e em seguida atribuir esse objeto a essa variavel, essa variavel terá acesso ao par nome / valor do objeto criado.


    Objetos literais são únicos. Se criar um objeto e atribuir a uma variação, mas em seguida atribuir esssa variavel a outra variavel, não vai acontecer uma copia e sim apontar pra referência criada anteriormente.


*/ 

// objeto em notação de classe 

class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas R$ ${this.preco}`)
    }
}

let produto = new Produto('notebook', 1300)
produto.verDescricao()


// objeto literal ou estático -> quando o objeto é descrito diretamente na variavel

let produto2 = {
    descricao: 'geladeira',
    preco: 1800,
    verDescricao: function(){
        //OBSERVAR que o operador this pega a variavel do contexto do objeto

        console.log(`${this.descricao} por apenas R$ ${this.preco}`)
    },
    funcao(){
        console.log("nova maneira de escrever um metodo dentro do objeto literal")
    }
}

// Adicionando conjunto de pares nome e valor dinamicamente 


let pessoa = {
    nome: 'Mateus', 
    idade: 21,
    profissao: "programador"
}

console.log(pessoa)

// adicionando um metodo/atributo ao objeto

pessoa.sexo = 'masculino'
pessoa.metodo = () => {
    pessoa.idade = 22
}
pessoa.metodo()
console.log(pessoa)