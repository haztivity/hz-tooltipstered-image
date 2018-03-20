/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {PageFactory, PageRegister, PageController} from "@haztivity/core";
import * as Prism "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-pug";
import template from "./page.pug";
import "./page.scss";
//Import tooltipster
import "tooltipster";
import "tooltipster/dist/css/tooltipster.bundle.css";
import {HzTooltipsteredImageResource} from "../../../resources/hz-tooltipstered-image/HzTooltipsteredImage";
export let page: PageRegister = PageFactory.createPage(
    {
        name: "6611",
        resources: [
            HzTooltipsteredImageResource
        ],
        template: template
    }
);
page.on(
    PageController.ON_RENDERING, null, (eventObject, template, pageController) => {
        console.log(`${pageController.options.name} rendering`);
    }
);
page.on(
    PageController.ON_RENDERED, null, (eventObject, $page: JQuery, pageController: PageController) => {
        console.log(`${pageController.options.name} rendered`);
    }
);
page.on(
    PageController.ON_SHOW, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show start`);
        Prism.highlightAll(false);
    }
);
page.on(
    PageController.ON_SHOWN, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show end`);
    }
);
page.on(
    PageController.ON_COMPLETE_CHANGE, null, (eventObject, isCompleted, $page, pageController) => {
        console.log(`${pageController.options.name} complete change`);
    }
);
page.on(
    PageController.ON_DESTROY, null, (eventObject, $page, pageController) => {
        console.log(`${pageController.options.name} destroy`);
    }
);