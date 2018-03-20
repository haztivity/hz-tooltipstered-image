var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@haztivity/core", "svg.js", "jquery-ui", "jq-tooltipstered-image"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var core_1 = require("@haztivity/core");
    require("svg.js");
    require("jquery-ui");
    require("jq-tooltipstered-image");
    var HzTooltipsteredImageResource = /** @class */ (function (_super) {
        __extends(HzTooltipsteredImageResource, _super);
        /**
         * Recurso de cuestionario. Encapsula jquery.quiz
         * @param _$
         * @param _eventEmitterFactory
         * @param _scormService
         * @example
         * div(data-hz-component="HzHeader")
         *      h1(data-hz-header-title)
         */
        function HzTooltipsteredImageResource(_$, _eventEmitterFactory, _scormService, _navigatorService, _dataOptions) {
            var _this = _super.call(this, _$, _eventEmitterFactory) || this;
            _this._scormService = _scormService;
            _this._navigatorService = _navigatorService;
            _this._dataOptions = _dataOptions;
            return _this;
        }
        HzTooltipsteredImageResource_1 = HzTooltipsteredImageResource;
        HzTooltipsteredImageResource.prototype.init = function (options, config) {
            this._options = this._$.extend(true, {}, HzTooltipsteredImageResource_1.DEFAULTS, options);
            this._config = config;
            var jqOptions = this._dataOptions.getDataOptions(this._$element, "jqTooltipsteredImage");
            this._options.tooltipsteredImage = this._$.extend(true, {}, HzTooltipsteredImageResource_1.DEFAULTS_TOOLTIPSTERED_IMAGE, jqOptions);
            this._$element.tooltipsteredImage(jqOptions);
            this._instance = this._$element.tooltipsteredImage("instance");
            this._assignEvents();
        };
        HzTooltipsteredImageResource.prototype._assignEvents = function () {
            this._$element.on("tooltipsteredImage:completed", { instance: this }, this._onTooltipsteredImageCompleted);
        };
        HzTooltipsteredImageResource.prototype._onTooltipsteredImageCompleted = function (e) {
            var instance = e.data.instance;
            instance._markAsCompleted();
        };
        HzTooltipsteredImageResource.prototype.disable = function () {
            if (_super.prototype.disable.call(this)) {
                this._$element.tooltipsteredImage("disable");
            }
        };
        HzTooltipsteredImageResource.prototype.enable = function () {
            if (_super.prototype.enable.call(this)) {
                this._$element.tooltipsteredImage("enable");
            }
        };
        HzTooltipsteredImageResource.prototype.getInstance = function () {
            return this._instance;
        };
        HzTooltipsteredImageResource.NAMESPACE = "hzTooltipsteredImage";
        HzTooltipsteredImageResource.PREFIX = "hz-tooltipstered-image";
        HzTooltipsteredImageResource.CLASS_COMPONENT = HzTooltipsteredImageResource_1.PREFIX;
        HzTooltipsteredImageResource.DEFAULTS_TOOLTIPSTERED_IMAGE = {};
        HzTooltipsteredImageResource.DEFAULTS = {
            storeHighestScore: false,
            attempts: -1
        };
        HzTooltipsteredImageResource = HzTooltipsteredImageResource_1 = __decorate([
            core_1.Resource({
                name: "HzTooltipsteredImage",
                dependencies: [
                    core_1.$,
                    core_1.EventEmitterFactory,
                    core_1.ScormService,
                    core_1.NavigatorService,
                    core_1.DataOptions
                ]
            })
        ], HzTooltipsteredImageResource);
        return HzTooltipsteredImageResource;
        var HzTooltipsteredImageResource_1;
    }(core_1.ResourceController));
    exports.HzTooltipsteredImageResource = HzTooltipsteredImageResource;
});
//# sourceMappingURL=HzTooltipsteredImageResource.js.map