// # review05.js

// ! 배민 주문 시스템

// 추가 - 장바구니에 메뉴 추가
// 조회 - 장바구니 메뉴 목록 조회
//     - 장바구니 상품 총 가격
// 수정 - 특정 상품 수량 변경
// 삭제 - 특정 상품 제거
//     - 장바구니 상품 전체 제거

let menu = {
  id: 1,
  name: 'sushi',
  price: 20000,
  spicy: 2,
  quantity: 1
}

let order = [];

function addToMenu(id, name, price, spicy, quantity) {
  const index = order.findIndex(item => item.id === id);
  if (index > -1) {
    cart[index].quantity += quantity;
  } else {
    order.push({id, name, price, spicy, quantity});
  }
}

function displayMenu() {
  console.log('=== Menu Contents ===');
  order.forEach(item => {
    console.log(`${item.name} : 맵기 ${item.spicy} 단계 ${item.quantity} 개 - ${item.price}원`);
    console.log(`${item.name} : ${item.quantity} 개 - ${item.price * item.quantity}원`);
  });
  let total = order.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  console.log(`총 금액 : ${total}원`);
}

function updateQuantity(id, quantity) {
  const index = order.findIndex(item => item.id === id);

  if (index > -1) {
    order[index].quantity += quantity;
  } else {
    console.log('해당 메뉴가 없습니다.');
  }
  displayMenu();
}

// 보통 장바구니 로직에 없는 설정이므로 제거함. (같은 단계일 때 동일 맵기 출력 구현이 안됨)
// function updateSpicy(id, spicy) {
//   const value = order.findIndex(item => item.id === id);

//   if (value !== spicy) {
//     order[value].spicy = spicy;
//   } else {
//     console.log(`동일한 맵기 단계입니다.`);
//   }
//   displayMenu();
// }

function removeFromOrder(id) {
  order = order.filter(item => item.id !== id);
  displayMenu();
}

function allClear() {
  order = [];
  console.log("=== Menu Contents ===");
  console.log('텅~');
}

addToMenu(1, '마라탕', 25000, 3, 1);
addToMenu(2, '마라샹궈', 20000, 5, 1);
addToMenu(3, '콜라', 1500, 0, 1);
addToMenu(4, '공기밥', 1000, 0, 2);

displayMenu();

updateQuantity(3, 2);

updateSpicy(2, 5);

// allClear();

