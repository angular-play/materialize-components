System.register(["./core/index", "./components/button.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (index_1_1) {
                exports_1({
                    "MD": index_1_1["MaterializeDirective"]
                });
            },
            function (button_component_1_1) {
                exports_1({
                    "WaveButton": button_component_1_1["WaveButton"],
                    "FloatButton": button_component_1_1["FloatButton"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=controls.js.map