//esercizio da capo

let myValue = 0 ;
for( i = 1; i<= 100; i++){
    myValue = i;
    const fizz = 'fizz';
    const buzz = 'buzz';
    const fizzbuzz = 'fizzbuzz';
    if( i % 15 === 0 ){
        myValue = fizzbuzz;
    }else if( i % 5 === 0 ) {
        myValue = buzz;
    
    } else if( i % 3 === 0 ){
        myValue = fizz;
    }
    console.log(myValue);
}

// // 1 - attribuisco un valore al div con flex
// const flexContainer = document.querySelector('.d-flex');
// // 2 - console.log(flexContainer);
// // 9 - creo il ciclo for per creare 100 box
// for(let i = 1; i<= 100; i++){
//     // 10 - inserisco gli altri passaggi all'interno del ciclo
//     // 3 - creo l'elemento div;
//     const NewBox = document.createElement('div');
// // 4 - assegno la classe generica box
// NewBox.classList.add('box');
// // 5 - assegno la classe generica normal perchè non sò come assegnare due classi
// NewBox.classList.add('normal');
// // 6 - creo uno span dentro il div
// const textInside = document.createElement('span');
// // 7 - inserisco un testo dentro span
// //textInside.innerHTML = 'Ciao';
// // 11 - Al posto metto il valore di i all'interno di modo tale che sia crescente
// textInside.append(`${i}`);

// NewBox.append(textInside);
// // 8 - inserisco il box nel div
// flexContainer.append(NewBox);
// // 12 - creo ciclo per la classe fizz
//     if( i % 3 === 0 ){
//         NewBox.classList.remove('normal')
//         NewBox.classList.add('fizz');
//         textInside.append(`fizz`);
//     }
// }

