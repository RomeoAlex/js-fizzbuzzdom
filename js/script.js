//______________________________MILESTONE 1
// assegno un valore esterno per poi stampare a video tutti i valori differenti da i
// let myValue = 0 ;
// for( i = 1; i<= 100; i++){
//     myValue = i;
//     const fizz = 'fizz';
//     const buzz = 'buzz';
//     const fizzbuzz = 'fizzbuzz';
//     if( i % 15 === 0 ){
//         myValue = fizzbuzz;
//     }else if( i % 5 === 0 ) {
//         myValue = buzz;
    
//     } else if( i % 3 === 0 ){
//         myValue = fizz;
//     }
//     console.log(myValue);
// }


//______________________________MILESTONE 2
// // 1 - attribuisco un valore al div con flex
// const flexContainer = document.querySelector('.d-flex');
// // 2 - console.log(flexContainer);
// // 3 - creo l'elemento div;
// const NewBox = document.createElement('div');
// // 4 - assegno la classe generica box
// NewBox.classList.add('box');
// // 5 - assegno la classe generica normal perchè non sò come assegnare due classi
// NewBox.classList.add('normal');
// // 6 - creo uno span dentro il div
// const textInside = document.createElement('span');
// // 7 - inserisco un testo dentro span
// textInside.innerHTML = 'Ciao';

// NewBox.append(textInside);
// // 8 - inserisco il box nel div
// flexContainer.append(NewBox);


//______________________________MILESTONE 3
const flexContainer = document.querySelector('.d-flex');
// 9 - creo il ciclo for per creare 100 box con i vari IF per creare box differenti

for( i = 1; i<= 100; i++){
    myValue = i;
    const NewBox = document.createElement('div');
    NewBox.classList.add('box');
    NewBox.classList.add('normal');
    const textInside = document.createElement('span');
    textInside.append(myValue);
    NewBox.append(textInside);
    if( i % 15 === 0 ){
        NewBox.classList.remove('normal');
        NewBox.classList.add('fizzbuzz');
        textInside.innerHTML = 'fizzbuzz';
 
    }else if( i % 5 === 0 ) {
        NewBox.classList.remove('normal')
        NewBox.classList.add('buzz');
        textInside.innerHTML = 'buzz';
    } else if( i % 3 === 0 ){
        NewBox.classList.remove('normal');
        NewBox.classList.add('fizz');
        textInside.innerHTML = 'fizz';
    }
    
    
    flexContainer.append(NewBox);
}

