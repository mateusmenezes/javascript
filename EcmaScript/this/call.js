/*
    function.call(this. arg1, arg2);
    call do ingles é chamar
    retorna o this do contexto que eu enviar

    o metodo call vai chamar para dentro da função o contexto que eu enviar e os argumentos para essa mesma função, contudo, o metodo call vai retornar para o contexto enviado o this da função que foi enviado.
*/

this.name = 'camila';

function sayMyName(age){
    this.age = age;
    console.log(this.name, this.age);
}

const dev = {
    name: 'isabela'
};

sayMyName.call(this, 18);
sayMyName.call(dev, 10);

console.log(this.age);
console.log(dev.age);


// o metodo .apply() é exatamente igual ao metodo .call(), a unica diferença é que o apply envia uma lista de argumentos em forma de array: .apply()

/*
    o metodo .bind() faz uma ligação com o contexto que esta passando. O metodo .bind() faz uma copia da função que chama o metodo ligada ao contexto passado para o bind.

    exemplo:
        const boundFunction =  sayMyName.bind(dev)
        boundFunction(19);

*/ 