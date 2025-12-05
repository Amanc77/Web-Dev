var a = 5;
console.log(a);
var num = 4;
var user;
(function (user) {
    user[user["admin"] = 0] = "admin";
    user[user["user"] = 1] = "user";
    user[user["man"] = 2] = "man";
})(user || (user = {}));
let ur = user.man;
console.log(ur);
export {};
//# sourceMappingURL=app.js.map