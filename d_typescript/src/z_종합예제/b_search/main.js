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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
{
    // 비동기 함수로, 사용자 정보를 외부 API에서 가져와 프라미스로 반환합니다.
    var fetchUsers_1 = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _a.sent();
                    // 응답이 성공적이지 않으면 에러를 발생시킵니다.
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users];
                case 3:
                    error_1 = _a.sent();
                    // 네트워크 요청에 실패했을 때 콘솔에 에러를 출력합니다.
                    console.error("Fetch error:", error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // 사용자 정보를 받아 HTML 엘리먼트를 생성하는 함수입니다.
    var createUserCard_1 = function (user) {
        // div 엘리먼트를 생성하고 'user-card' 클래스를 추가합니다.
        var userCard = document.createElement("div");
        userCard.className = "user-card";
        // 생성된 div에 HTML 내용을 삽입합니다.
        userCard.innerHTML = "\n    <h2>".concat(user.name, "</h2>\n    <p><strong>Username:</strong> ").concat(user.username, "</p>\n    <p><strong>Email:</strong> ").concat(user.email, "</p>\n  ");
        return userCard;
    };
    // 사용자 정보 배열을 받아 화면에 표시하는 함수입니다.
    var displayUsers_1 = function (users) {
        // 'user-list' ID를 가진 엘리먼트를 가져옵니다.
        var userList = document.getElementById("user-list");
        if (userList) {
            // userList 내용을 초기화합니다.
            userList.innerHTML = "";
            // 사용자 정보를 순회하며 각 사용자 카드를 생성하고 추가합니다.
            users.forEach(function (user) {
                var userCard = createUserCard_1(user);
                userList.appendChild(userCard);
            });
        }
    };
    // 사용자 정보를 필터링하는 함수입니다.
    var filterUsers_1 = function (users, query) {
        return users.filter(function (user) {
            // 사용자의 이름, 사용자명, 이메일 중 하나라도 쿼리 문자열을 포함하면 해당 사용자를 반환합니다.
            return user.name.toLowerCase().includes(query.toLowerCase()) ||
                user.username.toLowerCase().includes(query.toLowerCase()) ||
                user.email.toLowerCase().includes(query.toLowerCase());
        });
    };
    // 사용자 정보를 정렬하는 함수입니다.
    var sortUsers_1 = function (users, key) {
        // 지정된 키(name 또는 email)를 기준으로 사용자 정보를 정렬합니다.
        return __spreadArray([], users, true).sort(function (a, b) { return a[key].localeCompare(b[key]); });
    };
    // 이벤트 리스너를 추가하는 함수입니다.
    var addEventListeners_1 = function (users) {
        // 'search-input'과 'sort-select' 엘리먼트를 가져옵니다.
        var searchInput = document.getElementById("search-input");
        var sortSelect = document.getElementById("sort-select");
        // 검색 입력 필드에 입력 이벤트 리스너를 추가합니다.
        searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("input", function () {
            var query = searchInput.value;
            var filteredUsers = filterUsers_1(users, query);
            var sortKey = sortSelect.value;
            var sortedUsers = sortUsers_1(filteredUsers, sortKey);
            displayUsers_1(sortedUsers);
        });
        // 정렬 선택 필드에 변경 이벤트 리스너를 추가합니다.
        sortSelect === null || sortSelect === void 0 ? void 0 : sortSelect.addEventListener("change", function () {
            var query = searchInput.value;
            var filteredUsers = filterUsers_1(users, query);
            var sortKey = sortSelect.value;
            var sortedUsers = sortUsers_1(filteredUsers, sortKey);
            displayUsers_1(sortedUsers);
        });
    };
    // 초기화 함수로, 사용자 데이터를 가져와 화면에 표시하고 이벤트 리스너를 설정합니다.
    var init = function () { return __awaiter(_this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUsers_1()];
                case 1:
                    users = _a.sent();
                    displayUsers_1(users);
                    addEventListeners_1(users);
                    return [2 /*return*/];
            }
        });
    }); };
    // 문서가 준비되면 init 함수를 호출합니다.
    document.addEventListener("DOMContentLoaded", init);
}
