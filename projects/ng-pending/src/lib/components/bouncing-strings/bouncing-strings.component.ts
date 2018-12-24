import { Component, OnInit, Input } from '@angular/core';
import { ILoaderConfig } from '../../models/loaderConfig';

@Component({
  selector: 'lib-bouncing-strings',
  template: `
  <div>
    <div class="spinner" [ngStyle]="{ 'height': config.height, 'width': config.width }">
      <div class="rect1" [ngStyle]="{ 'background-color': config.color }"></div>
      <div class="rect2" [ngStyle]="{ 'background-color': config.color }"></div>
      <div class="rect3" [ngStyle]="{ 'background-color': config.color }"></div>
      <div class="rect4" [ngStyle]="{ 'background-color': config.color }"></div>
      <div class="rect5" [ngStyle]="{ 'background-color': config.color }"></div>
    </div>
  </div>
  `,
  styles: [`
  .spinner {
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 1px;
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }  20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
  }
  `]
})
export class BouncingStringsComponent implements OnInit {
  @Input() config: ILoaderConfig;
  constructor() { }

  ngOnInit() {
  }

}
