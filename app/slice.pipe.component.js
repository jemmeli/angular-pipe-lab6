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
var SlicePipe = (function () {
    function SlicePipe() {
        this.str = "voidcanvas.com";
        this.names = ['paul', 'david', 'ean', 'renee', 'chloe'];
    }
    SlicePipe = __decorate([
        core_1.Component({
            selector: 'slice-pipe',
            template: "\n<h2>Slice Pipe Example</h2>\n<p>{{str}} (0:4): {{str | slice:0:4}}</p>\n<h4>names (1:4)</h4>\n<ul>\n<li *ngFor=\"let name of names | slice:1:4\">{{name}}</li>\n</ul>\n" }), 
        __metadata('design:paramtypes', [])
    ], SlicePipe);
    return SlicePipe;
}());
exports.SlicePipe = SlicePipe;
//# sourceMappingURL=slice.pipe.component.js.map