// var Book = {
// 	title: '',
// 	author: '',
// 	year: '',
// 	getBookInfo: function() {
// 		return this.title + " (" + this.year + ")";
// 	},
// 	getBookInfoAuthors: function() {
// 		return this.title + " by " + this.author + " (" + this.year + ")";
// 	},
// 	saveBook: function(mytitle,myauthor,myyear) {
// 		this.title = mytitle;
// 		this.year = myyear;
// 		if (myauthor) {
// 			this.author = myauthor;
// 		}
// 	}
// };

function Book(title, author, year) {
	this.title = title;
}

var books = [];

function addBook() {
	var title = document.getElementById('title').value;
	var author = document.getElementById('author').value;
	var year = document.getElementById('year').value;
	if (!title || !year) {
		outputMessage('Title and year are required fields.');
	}
	var instanceBook = new Book(title);
	books.push(instanceBook);
	console.log(books);
	outputMessage(title + " was successfully added.")
}

function listBooks() {
	document.getElementById('bookList').innerHTML = "";
	var prevhtml = document.getElementById('bookList').innerHTML;
	for (var i = 0; i < books.length; i++) {
		prevhtml = prevhtml + "<li>" + books[i].getBookInfo() + "</li>";
	}
	console.log(prevhtml);
	document.getElementById('bookList').innerHTML = prevhtml;
}

function listBooksAuthors() {
	document.getElementById('bookList').innerHTML = "";
	var prevhtml = document.getElementById('bookList').innerHTML;
	for (var i = 0; i < books.length; i++) {
		prevhtml = prevhtml + "<li>" + books[i].getBookInfoAuthors() + "</li>";
	}
	console.log(prevhtml);
	document.getElementById('bookList').innerHTML = prevhtml;
}

function outputMessage(message) {
	document.getElementById('msg').innerHTML = message;
}