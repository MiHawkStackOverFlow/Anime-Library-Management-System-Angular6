import { Component, OnInit, Input } from '@angular/core';
import { timer, Observable, Subscription } from 'rxjs';
import { Carousel } from '../interfaces/carousel';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() sliderImages: Array<Carousel>;
  @Input() sliderHeight: number;
  
  subscribe: Subscription;

  constructor() { }

  ngOnInit() {
    let source: Observable<number> = timer(3000, 4000);
    this.subscribe = source.subscribe(() => {
      ($("#myCarousel") as any).carousel("next");
    });    
  }

  ngOnDestroy() {
    if(this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }

}