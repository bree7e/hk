import {
    Component,
    Input,
    Directive,
    ViewChild,
    TemplateRef
} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'tab-title',
})
export class TabTitleDirective {}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'tab-content'
})
export class TabContentDirective {}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tab',
    templateUrl: './tab.component.html'
})
export class TabComponent {
    @Input() active = false;
    @ViewChild('title') public titleTemplate: TemplateRef<TabTitleDirective>;
    @ViewChild('content') public contentTemplate: TemplateRef<TabContentDirective>;
}
