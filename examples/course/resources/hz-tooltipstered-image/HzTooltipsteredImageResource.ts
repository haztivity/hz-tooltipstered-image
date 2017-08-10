/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {
    $,
    Resource,
    ResourceController,
    EventEmitterFactory,
    ScormService,
    NavigatorService,
    DataOptions
} from "@haztivity/core";
import "svg.js";
import "jquery-ui";
import "jq-tooltipstered-image";
@Resource(
    {
        name: "HzTooltipsteredImage",
        dependencies: [
            $,
            EventEmitterFactory,
            ScormService,
            NavigatorService,
            DataOptions
        ]
    }
)
export class HzTooltipsteredImageResource extends ResourceController {
    public static readonly NAMESPACE = "hzTooltipsteredImage";
    protected static readonly PREFIX = "hz-tooltipstered-image";
    protected static readonly CLASS_COMPONENT = HzTooltipsteredImageResource.PREFIX;
    protected static readonly DEFAULTS_TOOLTIPSTERED_IMAGE = {

    };
    protected static readonly DEFAULTS = {
        storeHighestScore:false,
        attempts:-1
    };
    protected _config:any;
    protected _instance:any;
    /**
     * Recurso de cuestionario. Encapsula jquery.quiz
     * @param _$
     * @param _eventEmitterFactory
     * @param _scormService
     * @example
     * div(data-hz-component="HzHeader")
     *      h1(data-hz-header-title)
     */
    constructor(_$: JQueryStatic, _eventEmitterFactory,protected _scormService:ScormService,protected _navigatorService:NavigatorService, protected _dataOptions) {
        super(_$, _eventEmitterFactory);
    }

    init(options, config?) {
        this._options = this._$.extend(true,{},HzTooltipsteredImageResource.DEFAULTS,options);
        this._config = config;
        let jqOptions  = this._dataOptions.getDataOptions(this._$element, "jqTooltipsteredImage");
        this._options.tooltipsteredImage = this._$.extend(true,{}, HzTooltipsteredImageResource.DEFAULTS_TOOLTIPSTERED_IMAGE, jqOptions);
        this._$element.tooltipsteredImage(jqOptions);
        this._instance = this._$element.tooltipsteredImage("instance");
        this._assignEvents();
    }
    protected _assignEvents(){
        this._$element.on("tooltipsteredImage:completed",{instance:this},this._onTooltipsteredImageCompleted);
    }
    protected _onTooltipsteredImageCompleted(e){
        let instance = e.data.instance;
        instance._markAsCompleted();
    }
    public disable(){
        if(super.disable()){
            this._$element.tooltipsteredImage("disable");
        }
    }
    public enable(){
        if (super.enable()) {
            this._$element.tooltipsteredImage("enable");
        }
    }
    public getInstance(): any {
        return this._instance;
    }
}
