# hz-tooltipstered-image
hz-tooltipstered-image is an haztivity resource to create maps of images with tooltips.\
hz-tooltipstered-image uses [jqTooltipsteredImage](https://github.com/davinchi-finsi/jq-tooltipstered-image) under the hood.
## Install
### NPM
```npm i --save @haztivity/hz-tooltipstered-image```
## Dependencies
- JQuery
- jqTooltipsteredImage
- tooltipster:**optional**. You could use the tooltip you prefer. Please go [here](https://github.com/davinchi-finsi/jq-tooltipstered-image#custom-tooltip)
- @haztivity/core
## Usage
1. Import @haztivity/hz-tooltipstered-image
2. Add HzQuizResource to the page
3. Add the tooltip that you want to use. You could use tooltipster.
4. Check [how to use jq-tooltipstered-image](https://github.com/davinchi-finsi/jq-tooltipstered-image#2-create-a-container)
5. Set ```data-hz-resource="HzTooltipsteredImage"```
6. Set the url of the svg with ```data-opt-tooltipstered-image-svg-url```
7. Set the templates or the titles for the steps with ```data-opt-tooltipstered-image-items```
### Ts
```typescript
//Import tooltipster or the tooltip plugin you want
import {PageFactory, Page, PageController, PageRegister} from "@haztivity/core";
import template from "./page.pug";
import {HzTooltipsteredImageResource} from "@haztivity/hz-tooltipstered-image";
import "tooltipster";
import "tooltipster/dist/css/tooltipster.bundle.css";
export let page: PageRegister = PageFactory.createPage(
    {
        name: "myPage",
        resources: [
            HzTooltipsteredImageResource
        ],
        template: template
    }
);
```
### Pug
```pug
    -
        let items = [
            {
                "id":"id-shape-1",
                "template":"#tip-1-template"
            },
            {
                "id":"id-shape-2",
                "template":"#tip-2-template"
            }
        ]
            
    div(data-hz-resource="HzTooltipsteredImage",
        data-opt-jq-tooltipstered-image-svg-url="path-to-file.svg",
        data-opt-jq-tooltipstered-image-items=items)
        
    div.tooltipstered-image__template#tip-1-template
        p Tip 1 content
    div.tooltipstered-image__template#tip-2-template
        p Tip 2 content
```
or
### HTML
```html
<div data-hz-resource="HzTooltipsteredImage" 
     data-opt-jq-tooltipstered-image-svg-url="path-to-file.svg"
     data-opt-jq-tooltipstered-image-items='[{"id":"id-shape-1","template":"#tip-1-template"},{"id":"id-shape-2","template":"#tip-2-template"}]'></div>
<div class="tooltipstered-image__template" id="tip-1-template">
  <p>Tip 1 content</p>
</div>
<div class="tooltipstered-image__template" id="tip-2-template">
  <p>Tip 2 content</p>
</div>
```
## Options
### jqTooltipsteredImage options
All the options of jqQuiz quiz **except** functions could be specified by attributes using:
```pug
    data-opt-jq-tooltipstered-image-[option]=[value]
```
If the option have multiple words, use dashes, for example ```svgUrl``` have to be provided as ```svg-url```\
For more info please visit [jqTooltipsteredImage](https://github.com/davinchi-finsi/jq-tooltipstered-image#options)
