
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib164-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib164Component implements OnInit {
      constructor() { }
  
      title = 'lib164-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib164Component],
      providers: [],
      exports: [Lib164Component],
  })
  export class Lib164Module { }

