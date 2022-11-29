let myLibrary = [];

function Book(title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`;
	};
}

function addBookToLibrary(book = Book.create()) {
	myLibrary.push((book = Book.create()));
	return;
}
