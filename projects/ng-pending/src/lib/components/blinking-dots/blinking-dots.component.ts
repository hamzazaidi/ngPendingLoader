import { Component, OnInit, Input } from '@angular/core';
import { ILoaderConfig } from '../../models/loaderConfig';


@Component({
  selector: 'lib-blinking-dots',
  template: `
  <div class="spinner">
    <div class="bounce1" [ngStyle]="{ 'background-color': config.background }"></div>
    <div class="bounce2" [ngStyle]="{ 'background-color': config.background }"></div>
    <div class="bounce3" [ngStyle]="{ 'background-color': config.background }"></div>
  </div>
  `,
  styles: [`
  .spinner {
    margin: 0 auto;
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
  `]
})
export class BlinkingDotsComponent implements OnInit {
  @Input() config: ILoaderConfig;
  constructor() { }

  ngOnInit() {
  }

}
