import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef, ComponentRef, ContentChild } from '@angular/core';


@Component({
  selector: 'cuiPopover',
  template: `
  <div #cuiPopoverContainer  class="cui-popover cui-popover--arrow cui-popover--right">
    <div class="cui-popover__arrow" ></div>
    <div  class="cui-popover__children">
      <ng-content></ng-content>
      <span>{{message}}</span>
    </div>
  </div>

  `,
  styles: [`

  .cui-event-overlay__arrow {
    margin-top: 0px;
  }
  .cui-event-overlay--right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cui-event-overlay--left {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .cui-event-overlay--left .cui-event-overlay__arrow {
    margin-left: 0px;
  }
  .cui-event-overlay--left .cui-event-overlay__children {
    margin-left: -11px;
  }

  .cui-event-overlay--top {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .cui-event-overlay--top .cui-event-overlay__arrow {
    margin-left: 0px;
  }
  .cui-event-overlay--top .cui-event-overlay__children {
    margin-top: -11px;
  }
  .cui-event-overlay--bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cui-event-overlay--bottom .cui-event-overlay__arrow {
    margin-left: 0px;
  }
  .cui-event-overlay--bottom .cui-event-overlay__children {
    margin-top: 11px;
  }
  `]
})
export class PopoverComponent implements OnInit {

  @Input() public message: string;
  @Input() public arrow: string;
  @Input() public direction: string;
  constructor() { }

  ngOnInit() {
  }
}
