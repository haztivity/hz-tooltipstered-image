(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./HzTooltipsteredImageResource"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var HzTooltipsteredImageResource_1 = require("./HzTooltipsteredImageResource");
    exports.HzTooltipsteredImageResource = HzTooltipsteredImageResource_1.HzTooltipsteredImageResource;
});
//# sourceMappingURL=HzTooltipsteredImage.js.map