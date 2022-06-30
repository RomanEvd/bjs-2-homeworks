// Задача №1.

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        state = 100;
        type = null;
    }
    fix() {
        return this.state *= 1.5;
    }
    set state(state) {
        if(state < 0) {
            this.state = 0;
        }
        else if(state > 100) {
            this.state = 100;
        }
        else {
            this.state = state;
        }
    }
    get state() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";   
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author); 
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author); 
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author); 
        this.type = "detective";
    }
}


// Задача №2.

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
}

addBook(book); {
    if(book.state > 30) {
        return this.books.push(book);
    }
}

findBookBy(type, value); {
    let searchResult = this.books.find(book => book[type] === value);
    return (typeof searchResult === "object") ? searchResult : null;
}

giveBookByName(bookName); {
    let reqBook  = this.books.find(book => book.name === bookName);
    if(typeof reqBook === "object") {
        this.books.splice(this.books.indexOf(reqBook), 1);
        return reqBook;
    }
    else {
        return null;
    }
}


//Задача №3.