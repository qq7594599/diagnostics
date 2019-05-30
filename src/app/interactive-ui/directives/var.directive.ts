import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appVar]'
})
export class VarDirective {

  constructor() { }

  @Output() setter: EventEmitter<any> = new EventEmitter()

  private _isActive;

  public get isActive() {
    return this._isActive;
  }

  @Input() public set isActive(value) {
    this._isActive = value;
    this.setter.emit();
  }

}
