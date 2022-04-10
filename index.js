const fs = require("fs");
const Book = require("./models/book");
const Magazine = require("./models/magazine");
const dataModule = require("./utils/fileConverter");

let booksData = dataModule.convertDataFormat("./data/books.csv");
let magazinesData = dataModule.convertDataFormat("./data/magazines.csv");
let authorsData = dataModule.convertDataFormat("./data/authors.csv");

// Method to print books and magazines data

function printBooksAndMagazines() {
  console.log(booksData, magazinesData);
}

// Find book or magazine by its isbn

function findByIsbn(isbn) {
  let result = [];
  let data = booksData.concat(magazinesData);
  for (i = 0; i < data.length; i++) {
    if (data[i].isbn == isbn) {
      result.push(data[i]);
    }
  }
  return result;
}

//console.log(findByIsbn("2365-8745-7854"));

//Find all books and authors by email

function findByEmail(email) {
  let result = [];
  let data = booksData.concat(magazinesData);
  for (i = 0; i < data.length; i++) {
    if (data[i].authors == email) {
      result.push(data[i]);
    }
  }
  return result;
}

//console.log(findByEmail("null-walter@echocat.org"));

// Sort by title

function sortByTitle() {
  let data = booksData.concat(magazinesData);

  data.sort(function (a, b) {
    return a.title.length - b.title.length;
  });

  return data;
}

//console.log(sortByTitle())

//Add a book and a magazine to the data structure of your software and export it to a new CSV file.

function createBookAndMagazine() {
  let bookAndMagazine = [];

  let book = new Book(booksData[0]);
  let magazine = new Magazine(magazinesData[0]);

  bookAndMagazine.push(book);

  bookAndMagazine = bookAndMagazine.concat(magazine);

  bookAndMagazine = JSON.stringify(bookAndMagazine);
  fs.writeFileSync("./data/bookAndMagazine.json", bookAndMagazine);
}

createBookAndMagazine();
