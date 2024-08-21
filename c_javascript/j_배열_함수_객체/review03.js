// # review03.js

// ! 도서관 관리 시스템
// : 각 도서관의 책 관리 시스템을 구현

// # 프로젝트 기능 정의

// 1) 도서관 (객체)
// 속성 : 여러 도서
// 기능
// - 도서를 추가
// - 도서 목록을 출력
// - (특정) 도서를 대여
// - (특정) 도서를 반납

// 2) 도서 (객체)
// 속성 : 책 고유의 id / 책의 제목 / 책의 저자 / 책의 대여 가능 여부

// # 프로젝트 객체 예시
let exampleLibrary = {
  books: [],  // 도서관의 책 목록을 저장하는 배열

  // 다양한 메서드 정의
}

let exampleBook = {
  id: 1,  // 숫자값
  title: 'SQLD 정복하기',
  author: '정수은',
  isAvailable: true // 기본값

  // 다양한 메서드 정의
}

// # 프로젝트 구현
// ? Book 클래스 : 각 책의 정보 저장 & 대여 및 반납 기능 정의
class Book {
  // 생성자 함수(메서드)
  // : 클래스 호출 시 자동으로 실행되는 함수 >> 객체 생성 시 속성값 초기화
  constructor(id, title, author) {
    // this 키워드 - 해당 클래스로 생성되어 사용중인 현재의 객체
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  // 메서드 정의
  rent() {  // 책 대여
    if (this.isAvailable) { // 책이 대여 가능한 상태
      // 책의 대여 상태를 false(대여됨)으로 변경
      this.isAvailable = false;
      console.log(`${this.title} has been rented`);
    } else {
      console.log(`${this.title} is currently not available`);
    }
  }

  returnBook() {  // 책 반납
    this.isAvailable = true;  // 책의 상태를 다시 대여 가능으로 변경
    console.log(`${this.title} has been returned`);
  }

}


// ? Library 클래스 : Book 객체의 목록을 관리 (추가, 출력, 대여 및 반납)
class Library {
  constructor() {
    this.books = [];  // 도서관의 도서 목록을 저장하는 배열
  }

  // cf) 클래스의 메서드 정의 시 함수의 형태 이지만 function 키워드 사용 x

  // 책의 추가
  addBook(title, author) {
    // 새로운 책 객체를 생성 (순차적인 id 할당)
    const newBook = new Book(this.books.length + 1, title, author);
    this.books.push(newBook);
    console.log(`${title}책이 도서관에 추가되었습니다.(저자 : ${author})`);
  }

  // 책 목록 출력
  displayBooks() {
    console.log('=== Library ===');
    this.books.forEach(book => {
      console.log(
        `${book.id}: ${book.title} by ${book.author}
          - ${book.isAvailable ? '대여 가능' : '대여됨'}`
      );
    });
  }

  // 특정 id 책 대여
  rentBook(id) {
    // cf) findIndex : 일치하는 요소의 인덱스 번호를 반환
    //     find : 일치하는 요소의 요소값을 반환 >> 객체
    const book = this.books.find(book => book.id === id);

    // 책이 존재하면
    if (book) {
      book.rent();  // 해당 서적의 returnBook 메서드 호출
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  // 특정 id 책 반납
  returnBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.returnBook();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }
}

// # 프로젝트 실행
const busanLibrary = new Library(); // 부산 도서관 객체 생성

busanLibrary.addBook('SQLD 공부', '정수은');
busanLibrary.addBook('JS 공부', '정쪼꼬');
busanLibrary.addBook('IoT 공부', '박규병');
busanLibrary.addBook('Java 공부', '정파이');

busanLibrary.displayBooks();

busanLibrary.rentBook(1); // 대여 o
busanLibrary.displayBooks();
busanLibrary.rentBook(1); // 대여 불가 메시지

busanLibrary.returnBook(1); // has been returned
busanLibrary.displayBooks();

const seoulLibrary = new Library(); // 서울 도서관 객체 생성
seoulLibrary.addBook('바나나먹기', '정수은');
seoulLibrary.addBook('짜장면 맛있게 끓이기', '정쪼꼬');

seoulLibrary.displayBooks();

// cf) 인스턴스(instance) === '객체'
// : 클래스를 통해 생성된 객체
// >> 메모리 주소에 할당된 객체
// >> 각 인스턴스는 독립된 객체