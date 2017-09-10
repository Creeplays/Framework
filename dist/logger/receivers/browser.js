var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "../", "@meteor-it/utils"], function (require, exports) {
    "use strict";
    var _1 = require("../");
    var utils_1 = require("@meteor-it/utils");
    var colors = {
        reset: ['', ''],
        bold: ['text-decoration:bold', 'text-decoration:none'],
        dim: ['text-decoration:bold', 'text-decoration:none'],
        italic: ['text-decoration:italic', 'text-decoration:none'],
        underline: ['text-decoration:underline', 'text-decoration:none'],
        inverse: ['color:black', 'text-decoration:none'],
        hidden: ['visible:none', 'text-decoration:none'],
        strikethrough: ['text-decoration:line-through', 'text-decoration:none'],
        black: ['color:black', 'color:black'],
        red: ['color:red', 'color:black'],
        green: ['color:green', 'color:black'],
        yellow: ['color:yellow', 'color:black'],
        blue: ['color:blue', 'color:black'],
        magenta: ['color:magenta', 'color:black'],
        cyan: ['color:cyan', 'color:black'],
        white: ['color:white', 'color:black'],
        gray: ['color:gray', 'color:black'],
        bgBlack: ['background:black', 'background:white'],
        bgRed: ['background:red', 'background:white'],
        bgGreen: ['background:green', 'background:white'],
        bgYellow: ['background:yellow', 'background:white'],
        bgBlue: ['background:blue', 'background:white'],
        bgMagenta: ['background:magenta', 'background:white'],
        bgCyan: ['background:cyan', 'background:white'],
        bgWhite: ['background:white', 'background:white']
    };
    ///console.clear();
    function extractColors(line) {
        var r = [];
        var nl = line.replace(/{(\/?)([^}]+)}/g, function () {
            var d = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                d[_i] = arguments[_i];
            }
            if (!colors[d[2]])
                return d[0];
            r.push(colors[d[2]][d[1] === '/' ? 1 : 0]);
            return '%c';
        });
        return [r, nl];
    }
    var BrowserConsoleReceiver = (function (_super) {
        __extends(BrowserConsoleReceiver, _super);
        function BrowserConsoleReceiver(nameLimit) {
            if (nameLimit === void 0) { nameLimit = 8; }
            var _this = _super.call(this) || this;
            _this.nameLimit = nameLimit;
            return _this;
        }
        BrowserConsoleReceiver.prototype.write = function (data) {
            var line = [data.line].concat(data.params);
            //line=colors[1];
            //colors=colors[0];
            var name = utils_1.fixLength(data.name, this.nameLimit, true, ' ');
            //line='%c'+name+'%c '+line;
            switch (data.type) {
                case _1.LOGGER_ACTIONS.IDENT:
                    console.group('%cIDENT', data.name);
                    break;
                case _1.LOGGER_ACTIONS.DEENT:
                    console.groupEnd();
                    break;
                case _1.LOGGER_ACTIONS.LOG:
                    console._log.apply(console, line);
                    break;
                case _1.LOGGER_ACTIONS.ERROR:
                    console._error.apply(console, line);
                    break;
                case _1.LOGGER_ACTIONS.WARNING:
                    console._error.apply(console, line);
                    break;
                case _1.LOGGER_ACTIONS.DEBUG:
                    console._log.apply(console, line);
                    break;
                case _1.LOGGER_ACTIONS.TIME_START:
                    console._log('TIME_START');
                    break;
                case _1.LOGGER_ACTIONS.TIME_END:
                    console._log('TIME_END');
                    break;
                default:
                    console._error('ERROR', data.type, _1.LOGGER_ACTIONS);
            }
            //console._log(data);
        };
        return BrowserConsoleReceiver;
    }(_1.BasicReceiver));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BrowserConsoleReceiver;
});
//# sourceMappingURL=browser.js.map