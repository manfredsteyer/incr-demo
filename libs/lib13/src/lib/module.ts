
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib13-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib13Component implements OnInit {
      constructor() { }
  
      title = 'lib13-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib13Component],
      providers: [],
      exports: [Lib13Component],
  })
  export class Lib13Module { }

