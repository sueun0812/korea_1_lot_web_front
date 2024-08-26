// # main.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/*
! 요구사항 정리

1. 사용자가 "Fetch User Data" 버튼을 클릭
2. "Loading user data" 메시지가 화면에 표시
3. 실제 데이터 요청이 실행되고, 완료되면 사용자 데이터가 화면에 표시
4. 요청이 실패하거나 문제가 발생하면, 에러 메시지가 화면에 표시
*/
//# 'fetchUserData' id를 가진 HTML 요소에 클릭 이벤트 리스너 추가
var fetchButton = document.getElementById('fetchUserData');
fetchButton === null || fetchButton === void 0 ? void 0 : fetchButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var userDataDiv, userIdElement, userId, apiUrl, fetchResponse, user, error_1, errorMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userDataDiv = document.getElementById('userData');
                userIdElement = document.getElementById('userId');
                userId = userIdElement ? userIdElement.value : '';
                apiUrl = "https://jsonplaceholder.typiusers/".concat(userId);
                if (!userDataDiv) return [3 /*break*/, 5];
                userDataDiv.innerHTML = "<p>Loading user data</p>";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(apiUrl)];
            case 2:
                fetchResponse = _a.sent();
                if (!fetchResponse.ok) {
                    throw new Error('사용자 데이터에 접근할 수 없습니다.');
                }
                return [4 /*yield*/, fetchResponse.json()];
            case 3:
                user = _a.sent();
                // console.log(user);
                userDataDiv.innerHTML = "\n          <h2>User Details</h2>\n          <p>Id: ".concat(user.id, "</p>\n          <p>Name: ").concat(user.name, "</p>\n          <p>Email: ").concat(user.email, "</p>\n          <p>Username: ").concat(user.username, "</p>\n          <p>Address: ").concat(user.address.street, ", ").concat(user.address.city, "</p>\n        ");
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                userDataDiv.innerHTML = "<p>".concat(error_1, "</p>");
                errorMsg = error_1.message;
                // let errorMsg = `${error}`;
                console.log(errorMsg);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//* -----DOM 요소 지정-----
//? 로딩 메시지 OR 사용자 데이터 OR 에러메시지를 출력할 DOM 요소 가져오기 - userDataDiv
// - 비동기 작업 처리 중: 로딩 메시지
// - 비동기 작업 처리 완료: 사용자 데이터
// - 비동기 작업 처리 실패: 에러 메시지
//? 사용자 데이터 id를 입력받을 input 요소 가져오기 - userIdElement
//? 해당 DOM 요소가 존재하면 input태그의 값(value)을 존재하지 않을 경우 빈 문자열을 반환
// >> 조건문
// - userIdElement가 null이 아님을 확인하고, 그 값을 가져오기
//* -----변수 지정-----
//? 사용자 데이터를 가져올 JSONPlaceholder API의 URL을 담을 변수 지정 - apiUrl
// `https://jsonplaceholder.typicode.com/users/${userId}`;
//* -----로딩 메시지 표시-----
//* try-catch 블럭을 사용하여 비동기 작업 처리(데이터 불러오기)
//? async / await 사용
// - async의 경우 이벤트 리스너의 콜백함수로 설정
// - await의 경우 fetch() 작업으로 명시
//? 사용자의 응답이 올바르지 못할 경우
// if(!fetchResponse.ok)
// : 사용자 에러 발생
//? 가져온 데이터를 json() 타입으로 변환
//? 사용자 데이터 표시 userDataDiv의 내부 HTML(.innerHTML)
// <h2>User Details</h2>
// <p>Id: ${user.id}</p>
// <p>Name: ${user.name}</p>
// <p>Email: ${user.email}</p>
// <p>Username: ${user.username}</p>
// <p>Address: ${user.address.street}, ${user.address.city}</p>
//? 비동기 작업 처리 중 오류 발생 시 (catch)
// userDataDiv에 에러 표시(.innerHTML)
