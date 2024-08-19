// # 문제 2-3.js

class Book {
  constructor(id, title, addYear) {
    this.id = id;
    this.title = title;
    this.addYear = addYear;
    this.isAvailable = true;
  };

  rent() {
    if(this.isAvailable) {
      this.isAvailable = false;
      console.log('대여 완료!');
    } else {
      console.log('대여중 - 대여 불가');
    };
  };

  return() {
    this.isAvailable = true;
    console.log('반납 완료!');
  };
};

class Library {
  constructor() {
    this.books = [];
  };

  add(title, addYear) {
    const addBook = new Book(this.books.length + 1, title, addYear);
    this.books.push(addBook);
    console.log(`${this.name} 책이 추가되었습니다. (${addYear})`);
  };

  bookList() {
    console.log('=== 책 목록 ===');
    this.books.forEach(book => {
      console.log(
        `${book.id}. ${book.title} (${book.author}()
          - ${book.isAvailable ? '대여 가능' : '대여 불가'}`
      );
    });
  };

  rentBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.rent();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  };
};

const library = new Library();

library.add('가나다', '가가', 2024);
library.add('라마바', '나나', 2023);

library.bookList();

