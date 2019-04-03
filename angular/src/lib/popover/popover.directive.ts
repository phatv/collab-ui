import {
  Directive,
  HostListener,
  Input,
  ComponentRef,
  Injector,
  ElementRef,
  Renderer2,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver} from '@angular/core';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { PopoverComponent } from './popover.component';

import { Overlay, OverlayRef, OverlayPositionBuilder, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Directive({
  selector: '[cuiPopover]'
})
export class PopoverDirective {
  @Input('cuiPopover') content: string | TemplateRef<any>;
  @Input() showArrow = '';
  @Input() direction = 'right';
  private _overlayRef?: OverlayRef | null = null;
  private _popoverContainerRef?: ComponentRef<PopoverComponent> | null = null;
  private _positions = [];


  constructor(
    private _elRef: ElementRef<any>,
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder,
    private _renderer: Renderer2,
    private _resolver: ComponentFactoryResolver,
    private _vcr: ViewContainerRef,
    private _injector: Injector,
    private _sso: ScrollStrategyOptions,
    private _componentFactoryResolver: ComponentFactoryResolver) {}

  @HostListener('mouseenter') onMouseOver() {
    this._open();
  }

  @HostListener('mouseleave') onMouseExit() {
    this._close();
  }

  private _open() {
    if ( this._popoverContainerRef ) {
      return;
    }

    if ( this.direction === 'right') {
      this._positions = [{
        originX: 'end',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: 5,
      }, {
        originX: 'center',
        originY: 'center',
        overlayX: 'center',
        overlayY: 'center',
        offsetX: 5,
      }];

    }

    const strategy = this._overlayPositionBuilder
    .flexibleConnectedTo(this._elRef)
    .withPositions(this._positions);

    this._overlayRef = this._overlay.create({
      positionStrategy: strategy,
      scrollStrategy: this._sso.close()
    });

    const factory = this._resolver.resolveComponentFactory(PopoverComponent);
    const injector = Injector.create({providers: [
      {
        provide: 'popover-config',
        useValue: {
          host: this._elRef.nativeElement
        }
      }
    ]});




    const _pinjector = new PortalInjector(this._injector, new WeakMap([]));
    if ( typeof this.content === 'string') {
        const containerPortal = new ComponentPortal(PopoverComponent, null , _pinjector);
        this._popoverContainerRef = this._overlayRef.attach(containerPortal);
        this._popoverContainerRef.instance.message = this.content;
      }
      if ( this.content instanceof TemplateRef ) {
        // content is the stuff in the ng-template
       // const context = {};
        // const viewRef = this.content.createEmbeddedView(context);
        const templatePortal = new TemplatePortal(this.content, this._vcr);
        const viewRef = this._overlayRef.attach(templatePortal);
        // this._popoverContainerRef.instance.cuiPopoverContainer = this.content;
        // this._vcr.createComponent(factory, 0, _pinjector, viewRef.rootNodes);
        //this._popoverContainerRef.instance.popoverContent = this._popoverContentRef.instance;
      }

    if ( !this.showArrow ) {
      this._popoverContainerRef.instance.arrow = 'arrow';
    }

    this._popoverContainerRef.instance.direction = this.direction;

    return;
  }

  private _close() {
    // if ( this._popoverContainerRef ) {
    //   this._overlayRef.detach();
    //   this._popoverContainerRef.destroy();
    //   this._popoverContainerRef = null;
    // }
  }

  private generateContent() {

 
  }
}
