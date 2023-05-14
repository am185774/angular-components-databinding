import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('srvElement')
  element: { type: string, name: string, content: string };

  @Input()
  name: string;

  constructor() {
    console.log('--> constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('--> ngOnChanges called! changes:', changes);
  }

  ngOnInit(): void {
    console.log('--> ngOnInit called!');
  }


  ngDoCheck () {
    console.log('ngDoCheck called!');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
