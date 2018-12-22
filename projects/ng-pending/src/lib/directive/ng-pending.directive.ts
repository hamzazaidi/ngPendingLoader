import {
  Directive,
  OnChanges,
  Input
} from '@angular/core';

@Directive({
  selector: '[ngPending]'
})
export class NgPendingDirective implements OnChanges {
  @Input() ngPending: boolean;
  constructor() { }

  ngOnChanges(changes) {
    console.log(changes);
  }

}
