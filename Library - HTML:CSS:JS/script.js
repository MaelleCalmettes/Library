// // // // // button to show the books from a JSON file


// button
let showBooks = document.querySelector('button');
// JSON file
let url = "text.json";


// get the div where the books will load
const books = document.getElementsByClassName('books')[0];


// make the books appear
showBooks.addEventListener('click', () => {
    fetch(url)
        .then(Response => Response.json())
        .then(pony => {
            for (i = 0; i < pony.books.length; i++) {

                // create div container + div img + div text
                let divAll = document.createElement('div');
                let divText = document.createElement('div');
                let divImg = document.createElement('div');

                // write/insert from json
                divImg.innerHTML = '<img src="' + pony.books[i].cover + '">';
                divText.innerHTML = '<h2>' + pony.books[i].title + '</h2>' + '<p>' + pony.books[i].description + '</p>' + '<small>' + pony.books[i].age + '</small>';

                // set attributes for css
                divAll.setAttribute("class", "bookContainer");
                divText.setAttribute("class", "bookText");
                divImg.setAttribute("class", "bookImg");

                // add in DOM
                books.insertAdjacentElement('beforeend', divAll);
                divAll.insertAdjacentElement('beforeend', divImg);
                divAll.insertAdjacentElement('beforeend', divText);
            }
        });
});


//// // // //  add new book

class livre {
    constructor(image, title, descriptive, whatAge) {
        this.image = image;
        this.title = title;
        this.descriptive = descriptive;
        this.whatAge = whatAge;
    }
    affiche() {
        // create div container + div img + div text
        let divAllAdd = document.createElement('div');
        let divTextAdd = document.createElement('div');
        let divImgAdd = document.createElement('div');

        // write/insert from json
        divImgAdd.innerHTML = '<img src="' + this.image + '">';
        divTextAdd.innerHTML = '<h2>' + this.title + '</h2>' + '<p>' + this.descriptive + '</p>' + '<small>' + this.whatAge + '</small>';

        // set attributes for css
        divAllAdd.setAttribute("class", "bookContainer");
        divTextAdd.setAttribute("class", "bookText");
        divImgAdd.setAttribute("class", "bookImg");

        // add in DOM
        books.insertAdjacentElement('afterbegin', divAllAdd);
        divAllAdd.insertAdjacentElement('beforeend', divImgAdd);
        divAllAdd.insertAdjacentElement('beforeend', divTextAdd);
    }
}

// display image title
// while (!document.getElementById('image').value === "") {
//     let imgTitle = document.createElement("p");
//     let imag = document.getElementsByClassName("chooseImage");
//     imgTitle.innerHTML = document.getElementById('image').value;
//     imag.insertAdjacentElement("afterend", imgTitle);
// }

// get submit button to add books
let addToLibrary = document.getElementById('add');


// au click create new book
addToLibrary.addEventListener('click', (e) => {
    e.preventDefault();

    // nouveau livre
    let newBook = new livre(document.getElementById('upload').value, document.getElementById('title').value, document.getElementById('sum').value, document.getElementById("whatAge").value);



var fileInput = document.getElementById('upload');
console.log(fileInput);
var filename = fileInput.files.item(0).name;
    console.log(filename);

    // affiche nouveau livre
    newBook.affiche();


})

// erase form on load
let form = document.querySelector("form");


// window.onload(form.reset());







// echecs tests local storage


// function affiche(image, title, descritpion, age) {
//     // create div container + div img + div text
//     let divAllAdd = document.createElement('div');
//     let divTextAdd = document.createElement('div');
//     let divImgAdd = document.createElement('div');

//     // write/insert from json
//     divImgAdd.innerHTML = '<img src="' + image + '">';
//     divTextAdd.innerHTML = '<h2>' + title + '</h2>' + '<p>' + descritpion + '</p>' + '<small>' + age + '</small>';

//     // set attributes for css
//     divAllAdd.setAttribute("class", "bookContainer");
//     divTextAdd.setAttribute("class", "bookText");
//     divImgAdd.setAttribute("class", "bookImg");

//     // add in DOM
//     books.insertAdjacentElement('afterbegin', divAllAdd);
//     divAllAdd.insertAdjacentElement('beforeend', divImgAdd);
//     divAllAdd.insertAdjacentElement('beforeend', divTextAdd);
// }



// localStorage.setItem('livres' + localStorage.length, JSON.stringify([newBook.image, newBook.title, newBook.descriptive, newBook.whatAge]));

// console.log(localStorage);

// for (k = 0; k < localStorage.length; k++) {

//     affiche(localStorage.getItem(localStorage.key(k)).value)

//     affiche(localStorage.getItem(localStorage.key(k)).image, localStorage.getItem(localStorage.key(k)).title, localStorage.getItem(localStorage.key(k)).descriptive, localStorage.getItem(localStorage.key(k)).whatAge)

// }


// localStorage.clear();