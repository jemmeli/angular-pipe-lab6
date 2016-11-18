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
var JSONPipe = (function () {
    function JSONPipe() {
        this.obj = {
            name: { fName: "Mohamed", lName: "Romdhani" },
            site: "Ariana",
            luckyNumbers: [2, 7, 8]
        };
    }
    JSONPipe = __decorate([
        core_1.Component({
            selector: 'json-pipe',
            template: "\n        <h2>JSON Pipe Example</h2>\n        <h4>Without JSON Pipe</h4>\n        <pre>{{obj}}</pre>\n        <h4>With JSON Pipe</h4>\n        <pre>{{obj | json}}</pre>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], JSONPipe);
    return JSONPipe;
}());
exports.JSONPipe = JSONPipe;
//# sourceMappingURL=json.pipe.component.js.map