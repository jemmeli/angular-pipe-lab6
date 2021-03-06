"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PercentPipe = (function () {
    function PercentPipe() {
        this.myNum = 0.1415927;
    }
    PercentPipe = __decorate([
        core_1.Component({
            selector: 'percent-pipe',
            template: "\n<h2>Percent Pipe Example</h2>\n<p>myNum : {{myNum | percent}}</p>\n<p>myNum (3.2-2) : {{myNum | percent:'3.2-2'}}</p>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PercentPipe);
    return PercentPipe;
}());
exports.PercentPipe = PercentPipe;
//# sourceMappingURL=percent.pipe.component.js.map