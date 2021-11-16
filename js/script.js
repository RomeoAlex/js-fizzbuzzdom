// 1 - attribuisco un valore al div con flex
const flexContainer = document.querySelector('.d-flex');
// 2 - console.log(flexContainer);
// 
// 3 - creo l'elemento div;
const NewBox = document.createElement('div');
// 4 - assegno la classe generica box
NewBox.classList.add('box');
// 5 - assegno la classe generica normal perchè non sò come assegnare due classi
NewBox.classList.add('normal');
// 6 - creo uno span dentro il div
const textInside = document.createElement('span');
// 7 - inserisco un testo dentro span
textInside.innerHTML = 'Ciao';
NewBox.append(textInside);
// 8 - inserisco il box nel div
flexContainer.append(NewBox);