System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var WaveButton, FloatButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WaveButton = (function () {
                function WaveButton() {
                    this.color = "blue lighten-2";
                    this.icon = "";
                    this.text = "";
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], WaveButton.prototype, "color", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], WaveButton.prototype, "icon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], WaveButton.prototype, "text", void 0);
                WaveButton = __decorate([
                    core_1.Component({
                        selector: "wave-button",
                        template: "\n        <a class=\"waves-effect waves-light btn {{color}}\">\n            <i class=\"material-icons left\">{{icon}}</i>\n            {{text}}\n        </a>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WaveButton);
                return WaveButton;
            }());
            exports_1("WaveButton", WaveButton);
            FloatButton = (function () {
                function FloatButton() {
                    this.color = "blue lighten2";
                    this.icon = "";
                    this.text = "";
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FloatButton.prototype, "color", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FloatButton.prototype, "icon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FloatButton.prototype, "text", void 0);
                FloatButton = __decorate([
                    core_1.Component({
                        selector: "float-button",
                        template: "\n        <a class=\"btn-floating btn {{color}}\">\n            <i class=\"material-icons left\">{{icon}}</i>\n            {{text}}\n        </a>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FloatButton);
                return FloatButton;
            }());
            exports_1("FloatButton", FloatButton);
        }
    }
});
//# sourceMappingURL=button.component.js.map