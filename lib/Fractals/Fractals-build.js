"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 'export default' is used to make this class availabe as an import. 
 * If something is not exported it is not visible when imported elsewhere. This 
 * class is an example of some awesome javascript.
 * 
 */

var DemoClass = (function () {
    function DemoClass(firstName, lastName) {
        _classCallCheck(this, DemoClass);

        this.firstName = firstName;
        this.lastName = lastName;

        this._name = firstName + " " + lastName;
    }

    // Getter

    _createClass(DemoClass, [{
        key: "normalFunction",
        value: function normalFunction() {
            return 10 * 12;
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }

        // Setter
        ,
        set: function set(name) {
            this._name = name;
        }
    }]);

    return DemoClass;
})();

exports.default = DemoClass;
"use strict";

var _DemoClass = require("./DemoClass.js");

var _DemoClass2 = _interopRequireDefault(_DemoClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thing = new _DemoClass2.default("Matt", "Morse"); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

console.log(thing.name);

thing.name = "Joe Peacock";
console.log(thing.name);

console.log(thing.normalFunction());
//# sourceMappingURL=Fractals-build.js.map
