"use strict";
exports.__esModule = true;
exports.KhmerDate = void 0;
var KhmerDate = /** @class */ (function () {
    //milliseconds = 20222-02-15T17:30:55.839Z 'dd-MMM-YYYY HH:mm:ss ms'
    function KhmerDate(milliseconds) {
        this.date = new Date();
        this.myDate = new Date(); // current date
        this.date = new Date(milliseconds);
        var seconds = this.date.getTime() / 1000;
        this.checkDateTime(seconds);
    }
    KhmerDate.prototype.checkDateTime = function (seconds) {
        var currentSeconds = (this.myDate.getTime() / 1000) + 7 * 60 * 60;
        var times = currentSeconds - seconds;
        if (times >= 2592000) {
            this.res = (Math.floor(times / 2592000)).toString() + "ខែមុន";
        }
        else if (times >= 604800) {
            this.res = (Math.floor(times / 604800)).toString() + "សប្តាហ៍មុន";
        }
        else if (times >= 86400) {
            this.res = (Math.floor(times / 86400)).toString() + "ថ្ងៃមុន";
        }
        else if (times >= 3600) {
            this.res = (Math.floor(times / 3600)).toString() + "ម៉ោងមុន";
        }
        else if (times >= 60) {
            this.res = (Math.floor(times / 60)).toString() + "នាទីមុន";
        }
        else if (times >= 0) {
            this.res = "មុននេះបន្តិច";
        }
        this.changeNumber();
    };
    KhmerDate.prototype.changeNumber = function () {
        this.res = this.res.replace('1', '១');
        this.res = this.res.replace('2', '២');
        this.res = this.res.replace('3', '៣');
        this.res = this.res.replace('4', '៤');
        this.res = this.res.replace('5', '៥');
        this.res = this.res.replace('6', '៦');
        this.res = this.res.replace('7', '៧');
        this.res = this.res.replace('8', '៨');
        this.res = this.res.replace('9', '៩');
    };
    KhmerDate.prototype.getDate = function () {
        return this.res;
    };
    return KhmerDate;
}());
exports.KhmerDate = KhmerDate;
