this.name = "Mateus";
// console.log(this.name);

function sayMyName(){
    console.log(this.name);
}
// NO contexto sem use strict, a função vai pegar a variavel this do global, mas se usar o modo estrito vai ser respeitado o escopo local de função
sayMyName();


// No contexto de objeto, não vai pegar a variavel global, mas somente dentro do objeto.
const dev = {
    name: 'Menezes',
    sayMyNameD(){
        console.log(this.name);
    }
}

dev.sayMyNameD();