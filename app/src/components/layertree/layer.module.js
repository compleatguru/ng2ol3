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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var layer_component_1 = require('./layer.component');
var Ng2ol3LayerModule = (function () {
    function Ng2ol3LayerModule() {
    }
    Ng2ol3LayerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [layer_component_1.Ng2ol3LayerComponent],
            exports: [layer_component_1.Ng2ol3LayerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3LayerModule);
    return Ng2ol3LayerModule;
}());
exports.Ng2ol3LayerModule = Ng2ol3LayerModule;
//# sourceMappingURL=layer.module.js.map