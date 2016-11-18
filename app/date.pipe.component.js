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
var DatePipe = (function () {
    function DatePipe() {
        this.today = new Date();
    }
    DatePipe = __decorate([
        core_1.Component({
            selector: 'date-pipe',
            template: "\n        <h2>Pipe Example</h2>\n        <h3>DatePipe</h3>\n        <h4>1. Today is {{today}}</h4>\n        <h4>2. Today is {{today | date}}</h4>\n        <h4>3. Today is {{today | date:\"dd/MM/yyyy\"}}</h4>\n        <h4>3. Today is {{today | date:\"mediumDate\"}}</h4>\n        <h4>3. Today is {{today | date:\"shortTime\"}}</h4>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], DatePipe);
    return DatePipe;
}());
exports.DatePipe = DatePipe;
//# sourceMappingURL=date.pipe.component.js.map