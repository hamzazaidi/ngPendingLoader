import { Component, OnInit, Input } from '@angular/core';
import { ILoaderConfig } from '../../models/loaderConfig';

@Component({
  selector: 'lib-bouncing-loader',
  template: `
  <div>
    <div class="spinner" [ngStyle]="{ 'height': config.height, 'width': config.width }">
      <div class="double-bounce1" [ngStyle]="{ 'background-color': config.background }"></div>
      <div class="double-bounce2" [ngStyle]="{ 'background-color': config.background }"></div>
    </div>
  </div>
  `,
  styles: [`
  .spinner {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    position: relative;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
  }
  `]
})
export class BouncingLoaderComponent implements OnInit {
  @Input() config: ILoaderConfig;
  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

}
