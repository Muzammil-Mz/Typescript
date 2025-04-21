// class inheritance example 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = /** @class */ (function () {
    function Home(a) {
        this.name = a;
    }
    return Home;
}());
var Cicle = /** @class */ (function (_super) {
    __extends(Cicle, _super);
    function Cicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cicle.prototype.disp = function () {
        console.log('Area of cirkke' + this.name);
    };
    return Cicle;
}(Home));
var objs = new Cicle("555");
console.log(objs);
