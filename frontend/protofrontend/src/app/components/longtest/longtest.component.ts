import {
  Component,
  OnInit,
  // ViewContainerRef,
  // ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { PromisetestService } from '../../services/promisetest.service';

@Component({
  selector: 'app-longtest',
  templateUrl: './longtest.component.html',
  styleUrls: ['./longtest.component.scss']
})
export class LongtestComponent implements OnInit {

  @ViewChild('container') containerRef: ElementRef;
  public data = 'Loading...';

  constructor(
    private service: PromisetestService,
    // private cvRef: ViewContainerRef,
    // private resolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.service.getLazyLoadedValue().subscribe(data => {
      // this.renderer.createText(this.containerRef, data.content);
      this.data = data.content;
    });
  }

}
