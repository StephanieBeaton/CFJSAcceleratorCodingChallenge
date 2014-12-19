function Library() {

  // the number of shelves is the length of this array
  this.shelves = [];

  // --------------------------------------------------------------
  //  Report All Books
  // --------------------------------------------------------------
  this.reportAllBooks = function () {

    var shelf = "";

    console.log("");
    console.log("inside Library.reportAllBooks");

    // go thru all the shelves
    // ... and display all books to the console.log
    for (var i = 0; i < this.shelves.length; i++) {
      shelf = this.shelves[i];

      console.log("Shelf Number = " + shelf.shelfNumber);

      // go thru all the books on the shelf
      for (var j = 0; j < shelf.booksOnShelf.length; j++) {
        console.log(shelf.booksOnShelf[j].title);
      }
    }

    console.log("exiting Library.reportAllBooks");

  }


  // --------------------------------------------------------------
  //  Add Shelf To Library
  // --------------------------------------------------------------
  this.addShelfToLibrary = function (shelfNumber) {
    var newShelf = new Shelf(shelfNumber);
    this.shelves.push(newShelf);

    //newShelf.display();
  }


  // --------------------------------------------------------------
  //  Get Shelf By Number
  // --------------------------------------------------------------
  this.getShelfByNumber = function (shelfNumber) {
     for (var i = 0; i < this.shelves.length; i++) {
        if (this.shelves[i].shelfNumber = shelfNumber) {
          return this.shelves[i];
        }
     }
  }

  this.display = function () {
    console.log("");
    console.log("display Library");
    console.log("library.shelves.length = " + this.shelves.length);

    for (var i = 0; i < this.shelves.length; i++) {
       console.log("display shelf " + i);
       this.shelves[i].display();
    }
  }

}


// --------------------------------------------------------------
// Shelf class
// Each shelf should know what books it contains.
// --------------------------------------------------------------
function Shelf(shelfNumber) {
  this.shelfNumber = shelfNumber;
  this.booksOnShelf = [];

  //--------------------------------------
  //  Display Shelf
  //--------------------------------------
  this.display = function () {
    console.log("");
    console.log("display shelf");
    console.log("shelfNumber = " + this.shelfNumber);
    console.log("booksOnShelf.length = " + this.booksOnShelf.length);

    for (var i = 0; i < this.booksOnShelf.length; i++ ) {
      console.log("displaying book " + i + " on shelf");
      this.booksOnShelf[i].display();
    }
  }

  //--------------------------------------
  //  Put Book on Shelf
  //--------------------------------------
  this.putBookOnShelf = function (book) {
     console.log("");
     console.log("inside Shelf.putBookOnShelf");
     this.booksOnShelf.push(book);
  }


  //--------------------------------------
  //  Take Book off Shelf
  //--------------------------------------
  this.takeBookOffShelf = function (book) {

      console.log("");
      console.log("inside Shelf.takeBookOffShelf");

     // loop thru all books on shelf
     // ... and remove the book
     var foundBook = false;
     var length = this.booksOnShelf.length;

     for (var i = 0; i < length; i++) {
         // ...assume the title of the book is unique
         if (this.booksOnShelf[i].title == book.title) {
           foundBook = true;
         }
         // move books over
         if (foundBook && i < length - 1) {
            this.booksOnShelf[i] = this.booksOnShelf[i+1];
         }
     }
     if (foundBook) {
       this.booksOnShelf.pop(length-1);
     }

     // display books on shelf
     this.display();
     console.log("exiting Shelf.takeBookOffShelf");

  }


}

// --------------------------------------------------------------
// Book class
// ...assume the title of the book is unique
// Make the book object have "enshelf"
// ... and "unshelf" methods that control what shelf the book is sitting on.
// --------------------------------------------------------------
function Book(title, author){
  this.title = title;
  this.author = author;
  this.shelf;

  this.display = function () {
    console.log("");
    console.log("display book");
    console.log("title = " + this.title);
    console.log("author = " + this.author);
  }

  //--------------------------------------
  // enshelf method
  // ... that control what shelf the book is sitting on.
  //--------------------------------------
  this.enshelf = function (shelf) {

      console.log("");
      console.log("inside Book.enshelf");
      shelf.putBookOnShelf(this);
      this.shelf = shelf;
  }


  //--------------------------------------
  // unshelf method
  // ... that control what shelf the book is sitting on.
  //--------------------------------------
  this.unshelf = function () {

      console.log("");
      console.log("inside Book.unshelf");
      this.shelf.takeBookOffShelf(this);
      this.shelf = "";
  }

}


console.log("");
console.log("create new library");
var library = new Library();

library.display();

/*
var shelfNumber = 1;
var newShelf = new Shelf(shelfNumber);

newShelf.display();
*/

// --------------------------------------------------------------
// add 100 shelfs to the Library
// --------------------------------------------------------------
console.log("");
console.log("add 1 shelf to the library");
for (var i = 1; i < 2; i++) {
  library.addShelfToLibrary(i);
}

library.display();


//--------------------------------------------------------
// get Shelf 1
//-------------------------------------------------------
console.log("");
console.log("get shelf 1");
var shelfNumber = 1;
var shelfOne = library.getShelfByNumber(shelfNumber);

shelfOne.display();

//-----------------------------------------------------
// create new book - "Gone With the Wind"
//-----------------------------------------------------
console.log("");
console.log("create new book - Gone With the Wind")
var goneWithTheWind = new Book("Gone With the Wind", "Margret Mitchell");

goneWithTheWind.display();

//-----------------------------------------------------
// put "Gone with the Wind" on shelf 1
//----------------------------------------------------
console.log("");
console.log("put Gone With the Wind on shelf 1");
goneWithTheWind.enshelf(shelfOne);

shelfOne.display();


//-----------------------------------------------------
// create new book - "JavaScript for Dummies"
//-----------------------------------------------------
console.log("");
console.log("create new book - JavaScript for Dummies")
var javaScriptForDummies = new Book("JavaScript for Dummies", "John Smith");

javaScriptForDummies.display();

//-----------------------------------------------------
// put "JavaScript for Dummies" on shelf 1
//----------------------------------------------------
console.log("");
console.log("put JavaScript for Dummies on shelf 1");
javaScriptForDummies.enshelf(shelfOne);

shelfOne.display();

// --------------------------------------------------------------
// report all books in the Library
// --------------------------------------------------------------
library.reportAllBooks();

// --------------------------------------------------------------
// remove book to shelf 1
// --------------------------------------------------------------
console.log("remove a book from shelf 1")
goneWithTheWind.unshelf();

shelfOne.display();
library.reportAllBooks();

