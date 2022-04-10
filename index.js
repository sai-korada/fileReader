let csvToJson = require( 'convert-csv-to-json' );
let book = require('./models/book');

let authorsFileName = './data/authors.csv';
let booksFileName = './data/books.csv';
let magazinesFileName = './data/magazines.csv' 


function convertDataFormat (fileName)
{
    return  csvToJson.getJsonFromCsv( fileName );
}

let booksData = convertDataFormat( booksFileName);
let magazinesData = convertDataFormat( magazinesFileName );
let authorsData = convertDataFormat( authorsFileName );

// Method to print books and magazines data

function printBooksAndMagazines ()
{
    console.log(booksData, magazinesData)
}

// Find book or magazine by its isbn

function findByIsbn (isbn)
{
    let result = []
    let data = booksData.concat(magazinesData)
    for ( i = 0; i < data.length; i++ )
    {
        if ( data[ i ].isbn == isbn )
        {
            result.push(data[i])
        }
    }
    return result;
}

//console.log(findByIsbn('2365-8745-7854'))

//Find all books and authors by email

function findByEmail (email)
{
    let result = []
    let data = booksData.concat(magazinesData)
    for ( i = 0; i < data.length; i++ )
    {
        if ( data[ i ].authors == email )
        {
            result.push(data[i])
        }
    }
    return result;
}

//console.log(findByEmail('null-walter@echocat.org'))

// Sort by title

function sortByTitle ()
{

    let data = booksData.concat( magazinesData )
    
    data.sort( function ( a, b )
    {
        
        return  a.title.length -b.title.length ;
      });

    return data;
}

//console.log(sortByTitle())



console.log( newBook );