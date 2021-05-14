
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib284-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib284Component implements OnInit {
      constructor() { }
  
      title = 'lib284-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib284Component],
      providers: [],
      exports: [Lib284Component],
  })
  export class Lib284Module { }

